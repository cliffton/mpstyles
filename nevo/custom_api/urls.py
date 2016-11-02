from django.conf.urls import patterns, url
from rest_framework.urlpatterns import format_suffix_patterns
from custom_api import views

urlpatterns = patterns(
	'',
	url(
		regex=r'^products/$', 
		view=views.ProductList.as_view(),
		name='product-list'),
	url(
        regex=r'^register/$',
        view=views.RegistrationView.as_view(),
        name="sign-up"
    ),
    url(
        regex=r'^users/login/$',
        view=views.LoginView.as_view(),
        name="login"
    )
)

urlpatterns = format_suffix_patterns(urlpatterns)