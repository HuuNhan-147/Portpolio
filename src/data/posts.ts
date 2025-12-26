import { BlogPost, Category } from './types';
import { javaSocketPost } from './posts/lap-trinh-socket-trong-java';
import { jsAsyncAwaitPost } from './posts/javascript-async-await';
import { restApiSpringPost } from './posts/rest-api-spring-boot';
import { nodeEventLoopPost } from './posts/nodejs-event-loop';
import { javaMultithreadingPost } from './posts/java-multithreading';
import { reactHooksPost } from './posts/react-hooks';
import { springSecurityPost } from './posts/spring-security';
import { websocketJsPost } from './posts/websocket-javascript';
import { microservicesSpringPost } from './posts/microservices-spring-cloud';

export const blogPosts: BlogPost[] = [
  javaSocketPost,
  jsAsyncAwaitPost,
  restApiSpringPost,
  nodeEventLoopPost,
  javaMultithreadingPost,
  reactHooksPost,
  springSecurityPost,
  websocketJsPost,
  microservicesSpringPost
];

export const categories: Category[] = [
  { id: 1, name: "Java Networking", count: 2 },
  { id: 2, name: "Java Backend", count: 3 },
  { id: 3, name: "JavaScript", count: 4 }
];