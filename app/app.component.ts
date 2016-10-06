import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    moduleId: module.id, // necessary for using relative path in templateUrl, more at http://stackoverflow.com/questions/36563678/angular-cannot-find-templateurl
    templateUrl: "app.component.html",
    styles: [`
        .active { font-weight: 700; }
    `]
})
export class AppComponent {
    // Interpolation
    title="Angular 2 Tutorial - Databinding examples";
    frontEnd = [ "LESS", "Notepad++", "Twitter Bootstrap", "Foundation", "jQuery", "Angular2", "React" ];
    detail = {
        name: "Twitter Bootstrap",
        excerpt: "", // the same behaviour, even if you delete this row
        description: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
        technologies: [ "HTML", "CSS", "jQuery" ]
    }

    // Property binding
    activeInput = true;
    imageSrc = "http://loremflickr.com/320/240";

    // Class & style binding
    isActive = true;

    // Event binding
    onClick(){
        alert("Button clicked!");
    }

    onKeyup(){
        console.log("key up event fired.");
    }

    onMouseover(){
        console.log("mouse over event fired.");
    }

    // Two-way binding
    // take a look at app.module.ts, necessary to import FormsModule
    iValue = "";
}
