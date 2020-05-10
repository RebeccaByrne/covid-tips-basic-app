import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TopicsPageRoutingModule } from "./topics-routing.module";
import {
  Topic1Component,
  Topic2Component,
  Topic3Component,
  Topic4Component,
  Topic5Component,
  Topic6Component,
} from "./content";
import { TopicHeaderComponent } from "./content/nav-header";

const TOPIC_CONTENT_COMPONENTS = [
  Topic1Component,
  Topic2Component,
  Topic3Component,
  Topic4Component,
  Topic5Component,
  Topic6Component,
  TopicHeaderComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TopicsPageRoutingModule],
  declarations: TOPIC_CONTENT_COMPONENTS,
  exports: [TopicHeaderComponent],
})
export class TopicsPageModule {}
