from django.urls import path
from .views import ProductsViewset, UserAPIView

urlpatterns = [
    path('Products', ProductsViewset.as_view({
        'get':'listProduct',
        'post':'create'  
    }     
    )),
    path('Products/<str:pk>', ProductsViewset.as_view({
        'get':'retrieve',
        'put':'update' ,
        'delete':'delete'
    }     
    )),
    path('User', UserAPIView.as_view())
]