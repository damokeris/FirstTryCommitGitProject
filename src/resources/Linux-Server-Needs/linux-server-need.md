1. 安装 nginx

- [nginx 官网链接](https://nginx.org/en/linux_packages.html#Ubuntu)

```md
示例步骤:
1.1 Install the prerequisites:

sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring

1.2 Import an official nginx signing key so apt could verify the packages authenticity. Fetch the key:

curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
 | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

1.3 Verify that the downloaded file contains the proper key:

gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

1.4 The output should contain the full fingerprint 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62 as follows:

pub rsa2048 2011-08-19 [SC] [expires: 2024-06-14]
573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid nginx signing key <signing-key@nginx.com>

- If the fingerprint is different, remove the file.

  1.5 To set up the apt repository for stable nginx packages, run the following command:

echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
 | sudo tee /etc/apt/sources.list.d/nginx.list

1.6 If you would like to use mainline nginx packages, run the following command instead:

echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" \
 | sudo tee /etc/apt/sources.list.d/nginx.list

1.7 Set up repository pinning to prefer our packages over distribution-provided ones:

echo -e "Package: \*\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" \
 | sudo tee /etc/apt/preferences.d/99nginx

1.8 To install nginx, run the following commands:

sudo apt update
sudo apt install nginx
```

2.