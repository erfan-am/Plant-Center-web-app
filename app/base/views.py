from django.shortcuts import render
from rest_framework import viewsets

from .models import Post, PostBranch
from .serializers import PostSerilizer,PostBranchSerializer

# Create your views here.

class branchView(viewsets.ModelViewSet):
    queryset=PostBranch.objects.all()
    serializer_class=PostBranchSerializer

    
class PostVliewList(viewsets.ModelViewSet):
    queryset=Post.objects.all()
    serializer_class=PostSerilizer