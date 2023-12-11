from django.db import models


class Medico(models.Model):
    """
    Figura de Dr. Ya que el usuario que registra las citas puede ser
    diferente al Dr.
    """

    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    telefono_de_contacto = models.CharField(verbose_name="teléfono de contacto", max_length=14)
    correo_electronico = models.EmailField(verbose_name="correo electrónico")

    def __str__(self):
        return f"{self.apellidos}, {self.nombre}"

    class Meta:
        verbose_name = "Médico"
        verbose_name_plural = "Médicos"


class Paciente(models.Model):
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    fecha_de_nacimiento = models.DateField()
    telefono_de_contacto = models.CharField(verbose_name="teléfono de contacto", max_length=14)
    correo_electronico = models.EmailField(
        verbose_name="correo electrónico", blank=True, null=True
    )
    notas = models.TextField()

    def __str__(self):
        return f"{self.apellidos}, {self.nombre}"


class Cita(models.Model):
    medico = models.ForeignKey(
        to=Medico, verbose_name="médico", on_delete=models.PROTECT
    )
    paciente = models.ForeignKey(to=Paciente, on_delete=models.PROTECT)
    fecha = models.DateField()
    hora = models.TimeField()
    estado = models.PositiveSmallIntegerField(
        choices=((1, "Pendiente"), (2, "Atendida"), (3, "Cancelada")),
        default=1,
        verbose_name="Estado de la cita",
    )
    notas = models.TextField()

    def __str__(self):
        return f"{self.paciente} - {self.fecha}"
