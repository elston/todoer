Todoer
========================

todo list platfrom

Technology
----------------
- Docker
- MongoDb 3.5
- Nodejs 8.3
- React, Redux


Getting Started with Docker and Docker Compose for Local Development
--------------------------------------------------------------------

### Install Docker

https://docs.docker.com/installation/

### Install Docker Compose

http://docs.docker.com/compose/install/

### Install the app's

In the project ./book/dev/ (where the `Makefile` file is located), run:

##### 1. Build

```
make build_all
```

##### 2. bootstrap

```
make bootstrap_all
```

##### 3. db

```
make shell_mongoshell
```

```
mongo storage:27017/admin -u adminmaster -p passmaster
```

```
mongo storage:27017/todoer -u usermaster -p passmaster
```


After that we have 
--------------------------------------------------------------------

### To run any command inside the Django Docker container, simply prepend:

```
make shell_fronter
```

This will start the containers in the debug mode. And then in container run:

```
runserv.sh
```

After that, open browswer and link `localhost:8080` 




Addition commands 
--------------------------------------------------------------------

### When you need finish all containers:

```
make down
```


### For help all make commands

```
make help
```


### View the images

```
make images
```

### View the volumes

```
make volumes
```

### Clear untagged Docker containers

```
make clear
```

### To view runing Docker containers

```
make ps
```

Some screenshots...
--------------------------------------------------------------------
![001](https://raw.githubusercontent.com/elston/todoer/master/screenshots/00.jpg "00")
![001](https://raw.githubusercontent.com/elston/todoer/master/screenshots/01.jpg "01")
![002](https://raw.githubusercontent.com/elston/todoer/master/screenshots/02.jpg "02")
![003](https://raw.githubusercontent.com/elston/todoer/master/screenshots/03.jpg "03")
