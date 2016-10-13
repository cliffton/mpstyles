from oscarapi.app import RESTApiApplication
from custom_api.urls import urlpatterns

class NevoRESTApiApplication(RESTApiApplication):

        def get_urls(self):
            urls = super(NevoRESTApiApplication, self).get_urls()
            return urlpatterns + urls

application = NevoRESTApiApplication()
