output "deployment_target" {
  value = var.deployment_target
}

output "instance_public_ip" {
  value = local.use_ec2 ? aws_instance.app[0].public_ip : null
}

output "app_url" {
  value = local.app_url
}

output "ecs_cluster_name" {
  value = local.use_ecs ? aws_ecs_cluster.app[0].name : null
}

output "ecs_service_name" {
  value = local.use_ecs ? aws_ecs_service.app[0].name : null
}

output "security_group_id" {
  value = aws_security_group.app_sg.id
}
