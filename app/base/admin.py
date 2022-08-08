from django.contrib import admin

from .models import Custom, Post, PostBranch,User
from django.contrib.auth.admin import UserAdmin 

class UserAdminConfig(UserAdmin):
    search_fields=(
        "email","username","phone","is_active","is_staff","location"
    )
    list_display=(
        "email","username","phone","is_active","is_staff","location","password"
    )

# Register your models here.
admin.site.register(PostBranch)
admin.site.register(User,UserAdminConfig)
admin.site.register(Post)
admin.site.register(Custom)