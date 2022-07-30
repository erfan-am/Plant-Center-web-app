from django.db import models

# Create your models here.


class User(models.Model):
    username=models.CharField(max_length=250)
    phone=models.models.PhoneNumberField()
    email=models.EmailField()
    password=models.CharField()
    address=models.CharField(max_length=400)
    def __str__(self):
        return self.name

class PostBranch(models.Model):
    branchName=models.CharField(max_length=250,primary_key=True)
    branchImage=models.CharField(max_length=250)

    def __str__(self):
        return self.branchName

class Post(models.Model):
    name=models.CharField(max_length=250)
    price=models.CharField(max_length=260)
    image=models.CharField(max_length=250)
    branchName=models.ForeignKey(PostBranch,related_name="items",on_delete=models.CASCADE)
    username=models.ForeignKey(User,related_name="customs",on_delete=models.CASCADE)

    def __str__(self):
        return self.name