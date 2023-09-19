# 使用官方 MySQL 镜像作为基础镜像
FROM mysql:latest

ENV MYSQL_CHARSET=utf8mb4
ENV MYSQL_COLLATION=utf8mb4_unicode_ci

# 设置容器启动时执行的初始化 SQL 脚本
COPY init.sql /docker-entrypoint-initdb.d/

# 暴露 MySQL 默认端口（3306）
EXPOSE 3306