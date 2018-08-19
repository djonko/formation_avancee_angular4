flash recovery C:\adb\ft\twrp-3.2.2-0-natrium.img

create frontend module part of app "module"

> ng generate module frontend --module app

> ng generate module backend --module app


Create component of backend and frontend modules

-------------------------Module Backend-------------------------

	-> ng generate component backend/login --module backend

-------------------------Module Frontend-------------------------
	-> ng generate component frontend/main --module frontend
	
	-> ng generate component frontend/todo-list --module frontend
	
	-> ng generate component frontend/todo-item --module frontend
	
	-> ng generate component frontend/todo-form --module frontend

	
Create service for authentication in backend module.

	-> ng generate service backend/authentication  --module backend
	
	-> ng generate service backend/todo  --module backend

Create service for todos in frontend module.

	-> ng generate service frontend/todo  --module frontend