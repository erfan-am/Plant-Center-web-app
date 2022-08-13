from datetime import datetime
from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from django.utils.translation import gettext_lazy as _


class CustomAccountManager(BaseUserManager):
    def create_superuser(self,email,username,password,**other_fields):
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_superuser',True)
        other_fields.setdefault('is_active',True)
        if other_fields.get('is_staff') is not True:
            raise ValueError("Superuser must be assigned to is_staff=True")
        if other_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must be assigned to is_superuser=True")
        return self.create_user(email,username,password,**other_fields)
  
    def create_user(self,email,username,password,**other_fields):
        other_fields.setdefault('is_active',True)
        other_fields.setdefault('is_staff',True)
        if not email:
            raise ValueError(_("you must Provide an email address"))
        email=self.normalize_email(email)
        user=self.model(email=email,username=username,password=password,
        **other_fields)
        user.set_password(password)
        user.save()
        return user



class User(AbstractBaseUser,PermissionsMixin):
    username=models.CharField(max_length=250,unique=True)
    phone=models.CharField(unique=True,max_length=20)
    email=models.EmailField(unique=True,max_length=30)
    password=models.CharField(max_length=30)
    location=models.CharField(max_length=400)
    is_staff=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    objects=CustomAccountManager()
    USERNAME_FIELD="email"
    REQUIRED_FIELDS=["username","password","phone","location"]
    def __str__(self):
        return self.username

class PostBranch(models.Model):
    id = models.AutoField(primary_key=True,editable=False)
    branchName=models.CharField(max_length=250)
    branchImage=models.CharField(max_length=250)
    def __str__(self):
        return self.branchName

class Post(models.Model):
    name=models.CharField(max_length=250)
    price=models.CharField(max_length=260)
    image=models.CharField(max_length=250)
    mainQuantity=models.IntegerField()
    _id=models.AutoField(primary_key=True,editable=False)
    branchName=models.ForeignKey(PostBranch,related_name="items",on_delete=models.CASCADE)
    def __str__(self):
        return self.name




class Custom(models.Model):
    name=models.CharField(max_length=250)
    price=models.CharField(max_length=250)
    image=models.CharField(max_length=250)
    quantity=models.IntegerField()
    date=models.DateField(default=datetime.now())
    _id=models.AutoField(primary_key=True,editable=False)
    user=models.ForeignKey(User,related_name="customs",on_delete=models.CASCADE)
    def __str__(self):
        return self.name



class EmailCallExist(models.Model):
    email=models.CharField(max_length=250)
    name=models.CharField(max_length=250)
    _id=models.AutoField(primary_key=True,editable=False)
    postName=models.ForeignKey(Post,related_name="emails",on_delete=models.CASCADE)
    def __str__(self):
        return self.email
