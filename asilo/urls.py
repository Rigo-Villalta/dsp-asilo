from django.urls import path

from .api import (
    CitaDetail,
    CitaList,
    MedicoDetail,
    MedicoList,
    PacienteDetail,
    PacienteList,
)

from .views import CustomTokenObtainPairView


app_name = "asilo"

urlpatterns = [
    path("api/citas/", CitaList.as_view(), name="citas"),
    path("api/citas/<int:pk>/", CitaDetail.as_view(), name="cita"),
    path("api/medicos/", MedicoList.as_view(), name="medicos"),
    path("api/medicos/<int:pk>/", MedicoDetail.as_view(), name="medico"),
    path("api/pacientes/", PacienteList.as_view(), name="pacientes"),
    path("api/pacientes/<int:pk>/", PacienteDetail.as_view(), name="paciente"),
    path("api/token/", CustomTokenObtainPairView.as_view(), name="custom_token")
]
