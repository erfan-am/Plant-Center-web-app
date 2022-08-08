from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Post, PostBranch,Custom, User
from .serializers import CustomSerialzier, PostSerilizer,PostBranchSerializer,UserSerilizer
from rest_framework.views import APIView
from rest_framework.permissions import  IsAuthenticated,AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
# Create your views here.

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView




class branchView(viewsets.ModelViewSet):
    queryset=PostBranch.objects.all()
    serializer_class=PostBranchSerializer

    
class PostVliewList(viewsets.ModelViewSet):
    queryset=Post.objects.all()
    serializer_class=PostSerilizer


class ordersView(viewsets.ModelViewSet):
    queryset=Custom.objects.all()
    serializer_class=CustomSerialzier



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        token['username'] = user.username
        token['phone'] = user.phone
        token['location'] = user.location
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class CustomUserCreate(APIView):
    def get_extra_actions():
            return []
    permission_classes=[AllowAny]
    def post(self,request):
        req_serializer=UserSerilizer(data=request.data)
        if req_serializer.is_valid():
            newuser=req_serializer.save()
            if newuser:
                return Response(status=status.HTTP_201_CREATED)
        return Response(req_serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class CustomersOrders(APIView):
    def post(self,request):
       for i in request.data:
            orders=Custom.objects.create(
                name=i['name'], 
                price=i['price'],
                quantity=i['quantity'],
                image=i['image'],
                user=User.objects.get(username=i['username'])
            )
            serilaze=CustomSerialzier(data=orders,many=True)
            if serilaze.is_valid():
                serilaze.save()
       return Response("is ok")



