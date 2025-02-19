# Generated by Django 3.2.25 on 2025-02-19 19:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='problem',
            old_name='test_cases',
            new_name='all_test_cases',
        ),
        migrations.AddField(
            model_name='problem',
            name='example_test_cases',
            field=models.JSONField(default=[
      {
        "input": "2, 3",
        "output": "5"
      },
      {
        "input": "10, 15",
        "output": "25"
      }
    ]),
            preserve_default=False,
        ),
    ]
