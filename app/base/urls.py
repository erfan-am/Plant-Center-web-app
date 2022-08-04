from posixpath import basename
from django.urls import path
from .views import PostVliewList,branchView,CustomUserCreate,MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework import routers

app_name="users"

router = routers.SimpleRouter()
router.register('branch',branchView)
router.register('posts',PostVliewList)

urlpatterns=[
path('api/token/refresh/',TokenRefreshView.as_view(),name="token_refresh"),
path('api/token/',MyTokenObtainPairView.as_view(),name="token_obtain_pair"),
path('register/',CustomUserCreate.as_view(),name='register')
]

urlpatterns +=router.urls
