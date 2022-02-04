import loadable from '@loadable/component';

const CoursesSchedules = loadable(() => import('../../../Views/Home/courses-schedules/CoursesSchedules.View'));

export const HomeRoutes = [
  {
    id: 1,
    path: '/courses-schedules',
    name: 'Shared:self-service',
    component: CoursesSchedules,
    layout: '/home',
    default: true,
    isExact: true,
    isRoute: true,
    authorize: true,
    roles: [],
    icon: 'mdi mdi-notebook-check-outline',
    isDisabled: false,
    children: [],
  },
];
