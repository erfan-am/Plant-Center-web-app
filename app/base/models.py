from django.db import models

# Create your models here.


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

    def __str__(self):
        return self.name