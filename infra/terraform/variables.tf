variable "project_name" {
  type        = string
  description = "Project name prefix"
  default     = "cloud-native-webapp"
}

variable "aws_region" {
  type        = string
  description = "AWS region"
  default     = "ap-south-1"
}

variable "deployment_target" {
  type        = string
  description = "Deployment target: ec2 or ecs"
  default     = "ec2"
}

variable "vpc_id" {
  type        = string
  description = "Existing VPC ID"
}

variable "public_subnet_id" {
  type        = string
  description = "Public subnet ID for EC2"
  default     = ""
}

variable "ecs_subnet_ids" {
  type        = list(string)
  description = "Subnet IDs for ECS service"
  default     = []
}

variable "allowed_ssh_cidr" {
  type        = string
  description = "Allowed CIDR block for SSH"
  default     = "0.0.0.0/0"
}

variable "instance_type" {
  type        = string
  description = "EC2 instance type"
  default     = "t3.micro"
}

variable "ami_id" {
  type        = string
  description = "AMI ID for EC2"
  default     = ""
}

variable "key_name" {
  type        = string
  description = "Existing EC2 key pair name"
  default     = ""
}

variable "app_port" {
  type        = number
  description = "Application port"
  default     = 3000
}

variable "ecs_cpu" {
  type        = number
  description = "ECS task CPU units"
  default     = 256
}

variable "ecs_memory" {
  type        = number
  description = "ECS task memory"
  default     = 512
}

variable "ecs_desired_count" {
  type        = number
  description = "Desired ECS task count"
  default     = 1
}

variable "ecs_image" {
  type        = string
  description = "Container image URI for ECS"
  default     = "ghcr.io/owner/repository:latest"
}

variable "database_url" {
  type        = string
  description = "DATABASE_URL env for app container"
  default     = "postgresql://app_user:app_password@db:5432/app_db"
}
