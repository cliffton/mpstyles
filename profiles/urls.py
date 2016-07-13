from django.conf.urls import url

from profiles import views

urlpatterns = [
    url(
        regex=r'^register/$',
        view=views.RegistrationView.as_view(),
        name="sign-up"
    ),
    url(
        regex=r'^login/$',
        view=views.LoginView.as_view(),
        name="login"
    )
]
