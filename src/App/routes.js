import Courses from '../Courses';
import Lecture from '../Lecture';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Courses,
    exact: true
  },{
    name:'lecture', 
    path:'/course/:courseName',
    component: Lecture, 
    exact: true
  }
];

function routePath(name) {
  console.log(name)
  let route = routes.find(route => route.name === name);

  if (route === undefined) return '';
  return route.path;
}

export default routes;

export { routePath };