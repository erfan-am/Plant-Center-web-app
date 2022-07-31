
from rest_framework import serializers 
from .models import Post,PostBranch,User

class PostSerilizer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields="__all__"

class UserSerilizer(serializers.ModelSerializer):
    customes=PostSerilizer(read_only=True, many=True )
    class Meta:
        model=User
        fields=("username","email","location","phone","customes")
        extra_kwargs={"password":{"write_only":True}}

    def create(self, validated_data):
        password=validated_data.pop('password',None)
        instance=self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class PostBranchSerializer(serializers.ModelSerializer):
    items=PostSerilizer(read_only=True, many=True )
    class Meta:
        model=PostBranch
        fields="__all__"