import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

/** MATERIAL COMPONENTS */
import { MatGridListModule } from '@angular/material/grid-list';

const materialModules = [
  MatGridListModule
];

@NgModule({
  exports: materialModules,
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false,
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ]
})

export class MaterialModule { }
