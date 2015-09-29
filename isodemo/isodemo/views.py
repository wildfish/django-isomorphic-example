from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'base.html'


class DataList(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['list_of_data'] = ['foo', 'bar', 'baz']
        return context

