from django.urls import path
from .views import PostVliewList,branchView,CustomUserCreate
from rest_framework.routers import DefaultRouter
app_name="users"
# router=DefaultRouter()
# router.register('postBranch',branchView)
# router.register('posts',PostVliewList)
# router.register('api/user/register',CustomUserCreate,basename='users')

urlpatterns=[
path('postBranch',branchView.as_view({"get":"PostBranch"}),name="postBranch"),
path('posts',PostVliewList.as_view({"get":"Post"}),name="posts"),
path('register',CustomUserCreate.as_view(),name='register')
]
