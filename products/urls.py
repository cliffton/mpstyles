from rest_framework import routers
from products.views import ProductViewSet, ProductDetailViewSet, ImageViewSet

router = routers.SimpleRouter()
router.register(r'products', ProductViewSet)
router.register(r'product-details', ProductDetailViewSet)
router.register(r'images', ImageViewSet)

urlpatterns = router.urls
