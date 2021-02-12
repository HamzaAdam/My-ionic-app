import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tournament",
    pathMatch: "full",
  },
  {
    path: "recipes",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./recipes/recipes.module").then((m) => m.RecipesPageModule),
      },
      {
        path: ":recipeId",
        loadChildren: () =>
          import("./recipe-detail/recipe-detail.module").then(
            (m) => m.RecipeDetailPageModule
          ),
      },
    ],
  },
  {
    path: "page1",
    loadChildren: () =>
      import("./flexbox/flexbox.module").then((m) => m.FlexboxPageModule),
  },
  {
    path: "page2",
    loadChildren: () =>
      import("./upcoming-matches/upcoming-matches.module").then(
        (m) => m.UpcomingMatchesPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "practise",
    loadChildren: () =>
      import("./practise/practise.module").then((m) => m.PractisePageModule),
  },
  {
    path: "intro",
    loadChildren: () =>
      import("./intro-guard/intro-guard.module").then(
        (m) => m.IntroGuardPageModule
      ),
  },
  {
    path: "tournament",
    loadChildren: () =>
      import("./tournament/tournament.module").then(
        (m) => m.TournamentPageModule
      ),
  },
  {
    path: 'animation',
    loadChildren: () => import('./animation/animation.module').then( m => m.AnimationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
