import React from "react";

const Blog = () => {
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:dark:text-gray-400">
          Some questions of answer given bellow for you to know.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">
              {" "}
              What are the different ways to manage a state in a React
              application?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">
              There are Four Kinds of React State to Manage. such asLocal state.
              Global state. Server state. URL state.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">
              How does prototypical inheritance work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">
              What is a unit test? Why should we write unit tests?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">
              Unit Testing is a type of software testing where individual units
              or components of a software are tested. Developers write unit
              tests for their code to make sure that the code works correctly.
              This helps to detect and protect against bugs in the future.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">
              React vs Angular vs Vue?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">
              <p>
                <strong>React:</strong> Facebook released React.js in March 2013
                as a JavaScript library. Because React just provides one view,
                it is not appropriate for building an MVC architecture: you must
                solve the model and controller yourself. Besides this, there are
                only advantages and lots of advantages. One of the biggest of
                them is that React.js uses a virtual DOM that only compares the
                previous HTML code differences and only loads the different
                parts. This significantly impacts the loading times. In a
                positive way, of course. With React.js, you handle the markup
                and the logic in the same file, which means you can output
                variables in a view component (JSX). React offers a type of
                mobile solutions for applications called React-Native. Pros:
                Fast loading of new data. One file contains both markup and
                logic (JSX). Enables the separation of data and presentation.
                It’s simple to get started and doesn’t take much practice. As a
                library, it doesn’t have that many presets, so it’s easy to
                learn. Smooth work of the app, even with complex underlying
                operations or database queries. Cons: It is just a JavaScript
                library, not a framework. No possibility to implement MVC
                architecture. Frequently insufficient for developing a web app
                and necessitating the use of other libraries. Only worth using
                if web applications need to be highly interactive.
              </p>
              <p>
                <strong>Angular:</strong> AngularJS was developed in 2009 by
                Google. The first version was Angular.JS. Angular is currently
                known as a JavaScript framework. Obviously, all significant
                Google projects have been developed with Angular. Angular.js is
                an MVC framework. A major disadvantage of Angular is that it
                uses a regular DOM, and thus, the entire tree structure of the
                HTML tags is updated, which massively impacts the loading time.
                Angular.js has its Ionic framework for mobile applications.
                Pros: Allows MVC architecture. Good maintainability. Web
                applications built with Angular perform very well. Angular lets
                you manage microfrontend architecture Projects may now be
                developed, expanded, and generated more quickly thanks to
                technologies like the Angular-CLI command-line tool. Angular
                provides a basic framework for developing web applications and
                manages them without additional libraries. Easy unit and
                end-to-end testing. Cons: Reloads the complete HTML tags tree
                structure. Slow loading time due to the Ionic app. Because of
                the given framework, Angular is relatively stiff and inflexible.
                To work with Angular.js, you need a certain training period. If
                a user has deactivated JavaScript in the browser, using a
                JavaScript-based SPA is not possible. Furthermore, it does not
                always support outdated or unfamiliar browsers.
              </p>
              <p>
                <strong>Vue:</strong> Vue.js is a JavaScript-based progressive
                framework for creating single-page applications. It was created
                with scalability and incrementality in mind, as well as ease of
                integration with other view layer frameworks. Vue is built from
                the bottom up to be progressively adaptable, unlike other
                monolithic frameworks. The core library focuses solely on the
                view layer, and it’s simple to use and connect with other
                libraries or applications. This framework’s fast learning angle
                is almost a trademark. It’s a flexible framework that may be
                used as a library or a full-fledged framework for developing
                large web applications. Vue.js combines the useful principles of
                the Angular and React frameworks and presents them in a
                minimalistic modern style. Web developers use Vue.js to create
                frontend user interfaces for web-based and hybrid mobile
                applications. Pros: A list of tools and libraries (Vue.js
                official CLI, Development Tools, Vue Loader, Vue Router).
                Flexibility and simplicity in the utilization. Thorough
                documentation. Reusable in the terms of adding numerous reactive
                components to the existing code. The possibility of
                Component-Based Architecture (CBA) Cons: Limited community
                comparing to Angular and React The number of available plugins
                Language handicap because a large number of users are
                non-English speakers Overcomplications with flexibility
              </p>
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
