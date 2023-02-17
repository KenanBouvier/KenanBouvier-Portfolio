# Portfolio Website

See the example website used in my portfolio at https://kenanbouvier.com

## Template Overview

There is one core section which is "automated":
- Your project/work list

Then whatever other pages you want (e.g. About, etc.);


## How to customize

I have built this website to allow for easy updating of projects and info. There is a projectData.js file which is data representing the projects (or similar).
Simply replace the data with yours. Similary, if you would like extra fields, you can edit the  IProps type to add different fields. From which you can add that in the [projectData.js](./public/projectData.js) file.

```typescript
interface IProps{
  data:{
    title: string;
    role:string;
    technologies: string[];
    description: string;
    development: string;
    demo:string | null;
    github:string | null;
  }
}
```
## Understanding each field

### *Title*
The main title for the project

### *Role*
Your role/position

### *Technologies*
This is an array of the technologies used in the project. Currently, I have set it up to map the technology string to the relevant svg through the [iconMap.js](./public/iconMap.js) file. 

For non-existing svgs in the map, add with format:

```javascript
[{'technology'},{'svg-url'},{size}]
```
For example:

```javascript
["react", ['https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',60]]
```

### *description*
The initial text paragraph description on the project

### *development*
The info on the actual development technicalities

### *demo* & *link*
Links to source code / live link