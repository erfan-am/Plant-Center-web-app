from django.urls import path

from .views import PostVliewList,branchView
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('postBranch',branchView),
router.register('posts',PostVliewList)

urlpatterns=router.urls
