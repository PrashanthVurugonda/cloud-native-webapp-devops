locals {
  use_ec2 = var.deployment_target == "ec2"
  use_ecs = var.deployment_target == "ecs"

  app_url = local.use_ec2 ? "http://${aws_instance.app[0].public_ip}:${var.app_port}" : null
}
