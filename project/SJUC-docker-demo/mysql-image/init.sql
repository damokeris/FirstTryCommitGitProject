-- 设置字符集和校对规则
SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';

-- 创建一个名为 "your_database" 的数据库
CREATE DATABASE IF NOT EXISTS your_database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 授权 "username" 用户对 "your_database" 数据库的所有权限
CREATE USER 'username'@'%' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON your_database.* TO 'username'@'%';

USE your_database;

create table your_tablename
(
    ...
);

INSERT INTO your_tablename (Column,Column,...) VALUES (value, value,...);

FLUSH PRIVILEGES;