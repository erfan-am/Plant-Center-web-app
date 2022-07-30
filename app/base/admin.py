from django.contrib import admin

from .models import Post, PostBranch

# Register your models here.
admin.site.register(PostBranch)
admin.site.register(Post)