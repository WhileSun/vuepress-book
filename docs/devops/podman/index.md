# podman

## 安装

### 官网文档
[podman官网安装文档](https://podman.io/docs/installation)  

### linux ubuntu安装
``` bash 
# Ubuntu 20.10 and newer
sudo apt-get update
sudo apt-get -y install podman
```


## 配置

### 镜像加速

#### 镜像源
目前国内还可以使用的[镜像源](https://www.jianshu.com/p/ce25edea73f5)

#### 打开配置文件
``` bash
sudo vim /etc/containers/registries.conf
```

#### 修改配置
**修改后记得重启podman**
``` bash
# 取消从默认地址搜索的仓库域名
unqualified-search-registries = ["docker.io"]

# 自定义搜索器
[[registry]]
# 仓库前缀（镜像前缀）
prefix = "docker.io"
# 加速器地址，此处配置的 docker 中国区源
location = "dockerpull.com"
# 允许通过 http 协议获取镜像
insecure = true
```
