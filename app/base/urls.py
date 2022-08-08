from posixpath import basename
from django.urls import path
from .views import PostVliewList,branchView,ordersView,CustomersOrders,CustomUserCreate,MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework import routers

app_name="users"

router = routers.SimpleRouter()
router.register('branch',branchView)
router.register('posts',PostVliewList)
router.register('orders/lists',ordersView)

urlpatterns=[
path('register/',CustomUserCreate.as_view(),name='register'),
path('orders/',CustomersOrders.as_view(),name="orders"),
path('api/token/',MyTokenObtainPairView.as_view(),name="token_obtain_pair"),
path('api/token/refresh/',TokenRefreshView.as_view(),name="token_refresh"),
]

urlpatterns +=router.urls
