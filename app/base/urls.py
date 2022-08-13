from django.urls import path
from .views import CreatePostAndBranch, EmailExistCallView,CustomersOrders, EmailView, PostVliewList,branchView,CustomUserCreate,MyTokenObtainPairView, sendEmail
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework import routers

app_name="users"

router = routers.SimpleRouter()
router.register('branch',branchView)
router.register('posts',PostVliewList)
router.register('emails',EmailView)

urlpatterns=[
path('register/',CustomUserCreate.as_view(),name='register'),
path('createpost/',CreatePostAndBranch.as_view(),name='create'),
path('sendemail/',sendEmail.as_view({'get':'post'}),name='sedemail'),
path('emailexist/',EmailExistCallView.as_view({'get':'post'}),name='emailexist'),
path('orders/',CustomersOrders.as_view(),name="orders"),
path('api/token/',MyTokenObtainPairView.as_view(),name="token_obtain_pair"),
path('api/token/refresh/',TokenRefreshView.as_view(),name="token_refresh"),
]

urlpatterns +=router.urls
