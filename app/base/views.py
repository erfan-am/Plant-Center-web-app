from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from .models import EmailCallExist, Post, PostBranch,Custom, User
from .serializers import CustomSerialzier, EmailExistSerialzier, PostSerilizer,PostBranchSerializer,UserSerilizer
from rest_framework.views import APIView
from rest_framework.permissions import  AllowAny
from rest_framework import status
# Create your views here.

import smtplib
from email.message import EmailMessage

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
        
class EmailExistCallView(viewsets.ModelViewSet):
    def post(self,request):
        print(request.data)
        order=EmailCallExist.objects.create(
            email=request.data['email'],
            name=request.data['username'],
            postName=Post.objects.get(name=request.data['name'])
        )
        email=EmailExistSerialzier(data=order)
        if email.is_valid():
            email.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(request.data)

class EmailView(viewsets.ModelViewSet):
    queryset=EmailCallExist.objects.all()
    serializer_class=EmailExistSerialzier
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
                return Response(status=status.HTTP_201_CREATED)
       return Response("is ok")





class CreatePostAndBranch(APIView):
    def post(self,req):
        if  PostBranch.objects.get(branchName = req.data['BranchName']):
            print('its already exist')
        else:
            orders=PostBranch.objects.create(
                branchName=req.data['BranchName'], 
                branchImage=req.data['BranchImage'])
            branchNameSerializer=PostBranchSerializer(data=orders,many=True)
            if branchNameSerializer.is_valid():
                branchNameSerializer.save()
                return Response(status=status.HTTP_201_CREATED)
        post=Post.objects.create(
            name=req.data['postName'],
            price=req.data['totalPrice'],
            mainQuantity=req.data['mainQuantity'],
            image=req.data['postImage'],
            branchName=PostBranch.objects.get(branchName=req.data['BranchName'])

        )
        post_serilizer=PostSerilizer(data=post,many=True)
        if post_serilizer.is_valid():
            post_serilizer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response("is ok")



class sendEmail(viewsets.ModelViewSet):
    def post(self,req):
        email=EmailCallExist.objects.all().values()
        for i in email:
            if i['postName_id'] == req.data['id']:
                SENDER_ADDRESS='dev.erfan1999@gmail.com'
                SENDER_PASSWORD='tictcjymwjbbkirn'
                msg=EmailMessage()
                msg['Subject']=f"Hi dear {i['name']}"
                msg['From']=SENDER_ADDRESS
                msg["TO"]=[
                   i['email']
                ]
                with smtplib.SMTP('smtp.gmail.com',587) as smtp:
                    smtp.ehlo()
                    smtp.starttls()
                    smtp.ehlo()
                    smtp.login(SENDER_ADDRESS,SENDER_PASSWORD)
                    if  SENDER_PASSWORD:
                        smtp.send_message(msg)
                        print("It was successfull")
                    else:
                        print("something get wrong")
        return Response("is ok")
