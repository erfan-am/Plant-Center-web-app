from django.urls import path
from .views import PostVliewList,branchView,CustomUserCreate,MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
app_name="users"
urlpatterns=[
path('postBranch/',branchView.as_view({"get":"PostBranch"}),name="postBranch"),
path('api/token/',MyTokenObtainPairView.as_view(),name="token_obtain_pair"),
 path('api/token/refresh/',TokenRefreshView.as_view(),name="token_refresh"),
path('posts',PostVliewList.as_view({"get":"Post"}),name="posts"),
path('register',CustomUserCreate.as_view(),name='register')
]
