resource "aws_instance" "app" {
  count = local.use_ec2 ? 1 : 0

  ami                         = var.ami_id
  instance_type               = var.instance_type
  subnet_id                   = var.public_subnet_id
  key_name                    = var.key_name
  vpc_security_group_ids      = [aws_security_group.app_sg.id]
  associate_public_ip_address = true

  user_data = <<-EOF
              #!/bin/bash
              set -eux
              apt-get update -y
              apt-get install -y docker.io docker-compose-plugin
              systemctl enable docker
              systemctl start docker
              EOF

  tags = {
    Name = "${var.project_name}-ec2"
  }
}
