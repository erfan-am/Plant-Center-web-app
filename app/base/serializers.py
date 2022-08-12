
from rest_framework import serializers 
from .models import Custom, EmailCallExist, Post,PostBranch,User


class EmailExistSerialzier(serializers.ModelSerializer):
    class Meta:
        model=EmailCallExist
        fields="__all__"

class PostSerilizer(serializers.ModelSerializer):
    emails=EmailExistSerialzier(read_only=True, many=True )
    class Meta:
        model=Post
        fields="__all__"

class PostBranchSerializer(serializers.ModelSerializer):
    items=PostSerilizer(read_only=True, many=True )
    class Meta:
        model=PostBranch
        fields="__all__"
        
class CustomSerialzier(serializers.ModelSerializer):
    class Meta:
        model=Custom
        fields="__all__"

class UserSerilizer(serializers.ModelSerializer):
    customes=CustomSerialzier(read_only=True, many=True )
    class Meta:
        model=User
        fields=("username","email","location","phone","customes","password","customes")
        extra_kwargs={"password":{"write_only":True}}

    def create(self, validated_data):
        password=validated_data.pop('password',None)
        instance=self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

