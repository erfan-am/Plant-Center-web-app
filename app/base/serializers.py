
from rest_framework import serializers 
from .models import Post,PostBranch

class PostSerilizer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields="__all__"

class PostBranchSerializer(serializers.ModelSerializer):
    items=PostSerilizer(read_only=True, many=True )
    class Meta:
        model=PostBranch
        fields="__all__"