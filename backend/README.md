## Install Dependencies

```
npm i
```

## Run test mongo instance and populate database

```bash
docker run -d -p 27017:27017 --name vue-mongo \
	-e MONGO_INITDB_ROOT_USERNAME=admin \
	-e MONGO_INITDB_ROOT_PASSWORD=admin \
	mongo

npm run populate
```

## Run server

```
npm start
```