import {FormControl} from "@angular/forms";

export interface ITodoItem {
  titleInput: FormControl<string | null>,
  description: FormControl<string | null>,
  dateTodoList: FormControl<Date | null>
}
