from django.urls import path
from .views import CustomUserCreate, UserList, UserDetail

app_name= 'users'

urlpatterns = [
	path('register/', CustomUserCreate.as_view(), name="create_user"),
	path('<int:pk>', UserDetail.as_view(), name="user_detail" ),
	path('', UserList.as_view(), name="user_list" ),
]