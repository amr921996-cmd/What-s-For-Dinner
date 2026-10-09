



function shorpa() {
    document.getElementById("prodacat").innerHTML =`
    
      <div id="target" class="row  sch-2">

        <div style="background-image: url(imge/shworba.jfif); height:726px; "
            class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.7</p>
                <p class="span">(267 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i> <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p  class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;" class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p  class="fw-bolder">60 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i> <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px  ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro ">Intermediate</p>
                <p class="pr">Mediterranean</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">French Onion Soup</h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Quick and healthy stir-fry with colorful vegetables</p>
            <!--  -->
            <div class="d-flex gap-2   tger">
                <i style="color:#FB2C36 ;" class="fa-solid fa-triangle-exclamation iuiu"></i>
                <div class="">
                    <p style="color: #9F0712; font-weight: bolder;">Extended Preparation Time</p>
                    <p style="color: #ED414A;">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                    </p>
                </div>
            </div>



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">4 large onions, thinly sliced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">4 tablespoons butter </p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">1 liter beef broth</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">1/2 cup white wine</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">2 bay leaves</p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">Fresh thyme</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">Baguette slices</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">200g Gruyère cheese, grated</p>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  "> Melt butter in a large pot. Add onions and cook slowly for 40 minutes,
                            stirring occasionally until caramelized.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">
                            Add white wine and deglaze the pot, scraping up brown bits. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 "> Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 "> Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 "> Ladle soup into oven-safe bowls. Top with toasted bread and cheese.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                            Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot. </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt text-center" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er">Calories</p>
                            </div>


                            <p class="erp">380 kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">42g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">58g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">14g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">4g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p class="erpp">1240mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Patience is key - don't rush the onion caramelization</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Use good quality beef broth for best flavor </p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p> Gruyère can be substituted with Swiss cheese</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Watch carefully when broiling to avoid burning</p>

                    </div>



                </div>


            </div>
            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function fish() {
    document.getElementById("prodacat").innerHTML = `
        <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/fish.jfif); height:726px; "
            class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.9</p>
                <p class="span">(187 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i> <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p  class="fw-bolder">10 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;" class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p  class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i> <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">2 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px  ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy</p>
                <p class="pr fw-normal">Seafood</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Honey Garlic Salmon</h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Pan-seared salmon with a sweet and savory glaze</p>
            <!--  -->
            



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">2 salmon fillets (6oz each)</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">3 tablespoons honey</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">2 tablespoons soy sauce</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">4 cloves garlic, minced</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">1 tablespoon olive oil</p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">1 teaspoon fresh ginger, grated</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">Sesame seeds for garnish</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">Green onions, sliced</p>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Pat salmon fillets dry with paper towels. Season with salt and pepper.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">
                            In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 "> Heat olive oil in a large skillet over medium-high heat.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 "> Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 "> Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                          Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice. </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">380kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">35g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">28g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">14g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">0g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 160px;" class="erpp ">720mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Don't overcook salmon - it should be slightly pink in the center</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Use wild-caught salmon for best flavor and nutrition </p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p> Let the sauce caramelize slightly for deeper flavor</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Pair with steamed broccoli or asparagus for a complete meal</p>

                    </div>



                </div>


            </div>
            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
     `
}
function stek() {
    document.getElementById("prodacat").innerHTML = `
      <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/stek.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.7</p>
                <p class="span">(412 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">240 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px  ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy</p>
                <p class="pr fw-normal">American</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">BBQ Pulled Pork</h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Slow-cooked tender pork in smoky barbecue sauce</p>
            <!--  -->
            <div class="d-flex gap-2   tger">
                <i style="color:#FB2C36 ;" class="fa-solid fa-triangle-exclamation iuiu"></i>
                <div class="">
                    <p style="color: #9F0712; font-weight: bolder;">Extended Preparation Time</p>
                    <p style="color: #ED414A;">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                    </p>
                </div>
            </div>



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">1kg pork shoulder</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">1 cup BBQ sauce</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT "> 1/2 cup apple cider vinegar</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">2 tablespoons brown sugar</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">1 tablespoon paprika</p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">1 tablespoon garlic powder</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">Burger buns</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">Coleslaw for serving</p>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over
                            pork shoulder.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">

                            Place pork in slow cooker with apple cider vinegar and 1/2 cup water. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 "> Cook on low for 8 hours or high for 4 hours until meat is very tender.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 "> Remove pork and shred with two forks. Discard excess fat.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 "> Return shredded pork to slow cooker, mix with BBQ sauce.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">Serve on toasted buns with coleslaw on top.                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bolder ">620kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">48g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">52g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">22g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">3g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp ">1180mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Use pork shoulder for best results - it stays moist</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Let pork rest before shredding for juicier meat </p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Make your own BBQ sauce for better flavor</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Leftovers freeze well for up to 3 months</p>

                    </div>



                </div>


            </div>
            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    
    `

}
function pitza() {
    document.getElementById("prodacat").innerHTML = `
    
        <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/pitza.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.9</p>
                <p class="span">(512 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">90 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">12 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">2 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px  ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Intermediate</p>
                <p class="pr fw-normal">Italian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Margherita Pizza</h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Classic Italian pizza with fresh mozzarella and basil</p>
            <!--  -->
            <div class="d-flex gap-2   tger">
                <i style="color:#FB2C36 ;" class="fa-solid fa-triangle-exclamation iuiu"></i>
                <div class="">
                    <p style="color: #9F0712; font-weight: bolder;">Extended Preparation Time</p>
                    <p style="color: #ED414A;">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                    </p>
                </div>
            </div>



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">300g pizza dough</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">200g crushed tomatoes</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT "> 250g fresh mozzarella</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">Fresh basil leaves</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">2 tablespoons olive oil</p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">
2 cloves garlic, minced</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">Salt and pepper to taste</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">Parmesan cheese for topping</p>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Let pizza dough come to room temperature and rest for 1 hour.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">

                           Preheat oven to maximum temperature (usually 250°C/480°F). </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 "> Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">
Roll out dough on a floured surface to desired thickness.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.</p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">580kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">24g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">68g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">22g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">4g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">920mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Use a pizza stone for crispier crust</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Don't overload with toppings - less is more </p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Add basil after baking to keep it fresh</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Let dough rest properly for best texture</p>

                    </div>



                </div>


            </div>
            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function smobsa() {
    document.getElementById("prodacat").innerHTML =`
       <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/smbosa.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.8</p>
                <p class="span">(234 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">30 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">60 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px  ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Intermediate</p>
                <p class="pr fw-normal">Mediterranean</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Greek Moussaka</h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Traditional layered eggplant casserole with lamb</p>
            <!--  -->
            <div class="d-flex gap-2   tger">
                <i style="color:#FB2C36 ;" class="fa-solid fa-triangle-exclamation iuiu"></i>
                <div class="">
                    <p style="color: #9F0712; font-weight: bolder;">Extended Preparation Time</p>
                    <p style="color: #ED414A;">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                    </p>
                </div>
            </div>



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">3 large eggplants, sliced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">500g ground lamb</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT "> 400g canned tomatoes</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">1 onion, diced</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">3 cloves garlic, minced</p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">
                                500ml béchamel sauce</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">
                                100g parmesan cheese</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">
                                Cinnamon and oregano</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">9</p>
                            <p class="P-TEXT ">
                                Olive oil</p>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">

                            Brush eggplant slices with olive oil, grill or bake until softened. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">
                            Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes..
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">
                            Preheat oven to 180°C (350°F).</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">
                            Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and
                            parmesan.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                            Bake for 45 minutes until golden. Let rest 15 minutes before serving..</p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">580kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">36g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">32g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">32g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">8g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">820mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Salt eggplant to remove bitterness</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Don't skip the resting time - it helps set the layers </p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Use ground beef if lamb is unavailable</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Make ahead and reheat for easier serving</p>

                    </div>



                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function shrimp() {
    document.getElementById("prodacat").innerHTML = `
     <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/shremp.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.8</p>
                <p class="span">(356 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">10 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">2 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px  ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy</p>
                <p class="pr fw-normal">Seafood</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Shrimp Scampi</h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Garlicky shrimp in white wine butter sauce</p>
            <!--  -->
           



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">400g large shrimp, peeled</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">300g linguine pasta</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT "> 6 cloves garlic, minced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">
1/2 cup white wine</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">
4 tablespoons butter</p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">
                                2 tablespoons olive oil</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">
                                Fresh parsley, chopped</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">
                               
Lemon juice and zest</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">9</p>
                            <p class="P-TEXT ">
                                
Red pepper flakes</p>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Cook linguine according to package directions. Reserve 1 cup pasta water.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">
Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">
                          Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">
                           Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">
                           
Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                          
Garnish with parsley, lemon zest, and serve immediately.</p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">520kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">36g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">54g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">18g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">3g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">620mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Salt eggplant to remove bitterness</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Don't skip the resting time - it helps set the layers</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>
Use ground beef if lamb is unavailable</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Make ahead and reheat for easier serving</p>

                    </div>



                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
  
    `
}
function lemon() {
    document.getElementById("prodacat").innerHTML = `
    <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/lemon.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.6</p>
                <p class="span">(278 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">20 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy</p>
                <p class="pr fw-normal">American</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Beef Tacos</h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Flavorful Mexican tacos with seasoned ground beef</p>
            <!--  -->




            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">500g ground beef</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">8 taco shells</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">1 onion, diced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">

                                2 tablespoons taco seasoning
                            </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">
                                Diced tomatoes
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">

                                Diced tomatoes</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">

                                Shredded cheddar cheese</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">


                                Sour cream</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">9</p>
                            <p class="P-TEXT ">

                                Salsa</p>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Heat a large skillet over medium-high heat. Cook ground beef until
                            browned.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">
                            Add diced onion and cook until softened, about 5 minutes. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">

                            Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">

                            Warm taco shells according to package directions.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">


                            Fill each shell with seasoned beef.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">

                            Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.</p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">420kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">26g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">54g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">32g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">4g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">780mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Drain excess fat from beef for healthier tacos</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Warm shells in oven for better texture</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>
                            Prepare all toppings before cooking beef</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Use ground turkey for a lighter option</p>

                    </div>



                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function parmigan() {
    document.getElementById("prodacat").innerHTML = `
        <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/PARMIGAN.jfif); height:726px; "
            class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.8</p>
                <p class="span">(234 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">20 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy</p>
                <p class="pr fw-normal">Italian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Creamy Spaghetti Carbonara</h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">A classic Italian pasta dish with eggs, cheese, and pancetta</p>
            <!--  -->




            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">
                                400g spaghetti pasta
                            </p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">
                                200g pancetta or guanciale, diced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">
                                4 large eggs</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">
                                100g Pecorino Romano cheese, grated
                            </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">
                                50g Parmesan cheese, grated
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">

                                Freshly ground black pepper</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">

                                Salt for pasta water</p>
                        </div>



                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Bring a large pot of salted water to boil. Cook spaghetti according to
                            package directions until al dente.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">
                            While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until
                            crispy, about 5-7 minutes. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">


                            In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of
                            freshly ground black pepper.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">


                            Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the
                            skillet with pancetta.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">



                            Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add
                            reserved pasta water as needed to create a creamy sauce.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">

                            Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">520kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">28g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">62g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">18g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">4g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">780mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Use room temperature eggs for a smoother sauce consistency</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Work quickly when mixing eggs with hot pasta to avoid scrambling</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>
                           Reserve extra pasta water - it's the secret to perfect creaminess</p>

                    </div>

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Freshly grated cheese makes all the difference in flavor</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Never add cream - authentic carbonara is made with eggs only</p>

                    </div>
                 
                      



                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function pasmaty() {
    document.getElementById("").innerHTML = `
        <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/pasmaty.jfif); height:726px; "
            class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.5</p>
                <p class="span">(324 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy</p>
                <p class="pr fw-normal">Asian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Chicken Stir-Fry
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Quick and healthy stir-fry with colorful vegetables</p>
            <!--  -->




            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">

                                500g chicken breast, sliced </p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">

                                500g chicken breast, sliced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">
                                1 broccoli head, florets</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">
                                2 carrots, julienned </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">

                                3 tablespoons soy sauce
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">

                                2 tablespoons oyster sauce</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">


                                1 tablespoon sesame oil</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">


                                2 cloves garlic, minced
                            </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">9</p>
                            <p class="P-TEXT ">


                                2 cloves garlic, minced</p>
                        </div>



                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Mix soy sauce, oyster sauce, and sesame oil for the sauce.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">
                            Heat wok over high heat with oil. Cook chicken until golden, remove and set aside. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">


                            Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">

                            Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">



                            Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">

                            Serve immediately over steamed rice or noodles.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">320kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">34g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">18g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">12g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">5g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">840mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Cut all ingredients before starting to cook</p>

                    </div>

               

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Keep heat high for authentic stir-fry texture</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Don't overcrowd the wok or vegetables will steam
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>DAdd cashews or peanuts for extra crunch
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function metPoll() {
    document.getElementById("prodacat").innerHTML = `
      <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/metPoll.jfif); height:726px; "
            class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.7</p>
                <p class="span">(389 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">20 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">30 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Intermediate</p>
                <p class="pr fw-normal">Asian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Chicken Tikka Masala
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Rich and creamy Indian curry with tender chicken pieces</p>
            <!--  -->
<div class="d-flex gap-2   tger">
                <i style="color:#FB2C36 ;" class="fa-solid fa-triangle-exclamation iuiu"></i>
                <div class="">
                    <p style="color: #9F0712; font-weight: bolder;">Extended Preparation Time</p>
                    <p style="color: #ED414A;">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                    </p>
                </div>
            </div>



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">

                                600g chicken breast, cubed</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">


                                1 cup plain yogurt</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">
                                2 tablespoons tikka masala paste</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">
                                400ml coconut cream </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">
                                1 onion, diced
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">

                                4 cloves garlic, minced</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">


                                2 tablespoons ginger, grated</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">


                                400g canned tomatoes
                            </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">9</p>
                            <p class="P-TEXT ">



                                Fresh cilantro for garnish</p>
                        </div>



                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at
                            least 30 minutes.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">
                            Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">


                            In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">


                            Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">




                            Stir in coconut cream and remaining yogurt. Add chicken back to the pan.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">


                            Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">450kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">38g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">24g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">22g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">4g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">760mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Marinate chicken overnight for deeper flavor</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Use full-fat coconut cream for richest sauce</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Adjust spice level by varying the tikka paste amount</p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Serve with naan bread and basmati rice  
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `

}
function tifo() {
    document.getElementById("prodacat").innerHTML = `
      <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/tifo.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.8</p>
                <p class="span">(445 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">20 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">2 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Intermediate</p>
                <p class="pr fw-normal">Asian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Pad Thai
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Popular Thai stir-fried noodles with shrimp and peanuts</p>
            <!--  -->




            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">

                                200g rice noodles</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">


                                200g shrimp, peeled</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">
                                2 eggs</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">

                                3 tablespoons tamarind paste </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">
                                2 tablespoons fish sauce
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">


                                1 tablespoon palm sugar</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">



                                Bean sprouts </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">



                                Crushed peanuts
                            </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">9</p>
                            <p class="P-TEXT ">



                                Lime wedges and cilantro</p>
                        </div>



                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Soak rice noodles in warm water for 30 minutes. Drain and set aside.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">
                            Mix tamarind paste, fish sauce, and palm sugar to make the sauce. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">



                            Heat wok over high heat. Scramble eggs and set aside.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">


                            Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">





                            Add scrambled eggs and bean sprouts. Toss everything together.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">


                            Serve topped with crushed peanuts, lime wedges, and cilantro.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">540kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">32g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">62g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">16g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">4g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">1120mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Don't oversoak noodles or they'll be mushy</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Cook on high heat for authentic wok flavor</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Balance sweet, sour, and salty flavors</p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Prepare all ingredients before starting to cook</p>
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function lazanya() {
    document.getElementById("prodacat").innerHTML = `
       <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/lazanya.jfif); height:726px; "
            class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.9</p>
                <p class="span">(478 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">30 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">90 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Intermediate</p>
                <p class="pr fw-normal">Italian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">Lasagna Bolognese
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Layered Italian pasta with rich meat sauce and béchamel</p>
            <!--  -->
            <div class="d-flex gap-2   tger">
                <i style="color:#FB2C36 ;" class="fa-solid fa-triangle-exclamation iuiu"></i>
                <div class="">
                    <p style="color: #9F0712; font-weight: bolder;">Extended Preparation Time</p>
                    <p style="color: #ED414A;">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                    </p>
                </div>
            </div>



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">
                                12 lasagna sheets</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">



                                500g ground beef</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">
                                400g canned tomatoes</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">
                                1 onion, diced </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">
                                2 carrots, diced
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">


                                500ml béchamel sauce</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">



                                200g mozzarella, grated </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">




                                100g parmesan cheese
                            </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">9</p>
                            <p class="P-TEXT ">




                                Fresh basil</p>
                        </div>



                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Cook ground beef with onion and carrots until browned. Add tomatoes and
                            simmer for 30 minutes.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">

                            Cook lasagna sheets according to package directions. Drain and set aside </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">



                            Preheat oven to 180°C (350°F).
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">



                            In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">





                            Top final layer with béchamel, mozzarella, and parmesan cheese. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">


                            Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">680kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">42g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">58g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">28g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">6g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">920mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Make bolognese sauce a day ahead for better flavor</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Don't skip the resting time after baking</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Use fresh pasta sheets for best texture</p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Freeze leftovers in individual portions</p>
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function prger() {
    document.getElementById.innerHTML ("prodacat")= `
      <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/prger.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.6</p>
                <p class="span">(421 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">20 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy
                <p class="pr fw-normal">American</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">
                    Classic Beef Burger
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Juicy homemade burger with all the fixings</p>
            <!--  -->
            <div class="d-flex gap-2   tger">
                <i style="color:#FB2C36 ;" class="fa-solid fa-triangle-exclamation iuiu"></i>
                <div class="">
                    <p style="color: #9F0712; font-weight: bolder;">Extended Preparation Time</p>
                    <p style="color: #ED414A;">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                    </p>
                </div>
            </div>



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">

                                500g ground beef (80/20)</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">




                                4 burger buns</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">

                                4 slices cheddar cheese</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">

                                Lettuce leaves </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">
                                Tomato slices
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">



                                Red onion, sliced</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">



                                Pickles</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">
                                Burger sauce or condiments
                            </p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">9</p>
                            <p class="P-TEXT ">




                                Fresh basil</p>
                        </div>



                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Divide ground beef into 4 equal portions. Form into patties, making a
                            small indent in the center.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">


                            Season patties generously with salt and pepper on both sides.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">




                            Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">



                            Add cheese slices in the last minute of cooking and cover to melt.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">






                            Toast burger buns lightly on the grill or in a pan. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">


                            Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">650kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">38g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">42g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">35g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">2g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">920mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Don't press down on burgers while cooking - keeps them juicy</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Make indent in center to prevent burger from puffing up</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Let patties rest for 2-3 minutes before serving</p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Toast buns for better texture and flavor</p>
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function helthe() {
    document.getElementById("prodacat").innerHTML = `
    <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/helthe.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.5</p>
                <p class="span">(156 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">20 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">35 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">2 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy
                <p class="pr fw-normal">Mediterranean</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">
                    Mediterranean Quinoa Bowl
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Healthy bowl with quinoa, vegetables, and tahini dressing</p>
            <!--  -->
            <div class="d-flex gap-2   tger">
                <i style="color:#FB2C36 ;" class="fa-solid fa-triangle-exclamation iuiu"></i>
                <div class="">
                    <p style="color: #9F0712; font-weight: bolder;">Extended Preparation Time</p>
                    <p style="color: #ED414A;">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                    </p>
                </div>
            </div>



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">

                                1 cup quinoa</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">
                                Cherry tomatoes, halved</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">


                                Cucumber, diced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">

                                Red onion, sliced</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">

                                Kalamata olives
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">



                                Feta cheese, crumbled</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">



                                Fresh parsley</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">

                                Tahini dressing
                            </p>
                        </div>



                    </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">Rinse quinoa thoroughly. Cook according to package directions, usually 15
                            minutes.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">



                            While quinoa cooks, prepare all vegetables and set aside.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">

                            For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">
                            Fluff cooked quinoa with a fork and let cool slightly.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">
                            Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                            Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">480kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">18g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">58g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">20g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">10g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">540mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Rinse quinoa well to remove bitter coating</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Let quinoa cool before adding fresh ingredients</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Make extra tahini dressing - it keeps well in the fridge</p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Add grilled chicken or chickpeas for extra protein</p>
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function aspagete() {
    document.getElementById.innerHTML("prodacat")=`
     <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/ASPAGYTE.jfif); height:726px; "
            class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.6</p>
                <p class="span">(289 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">20 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">30 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy
                <p class="pr fw-normal">Asian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">
                    Vegetable Curry
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Hearty vegetarian curry with coconut milk</p>
            <!--  -->
            <div class="d-flex gap-2   tger">
                <i style="color:#FB2C36 ;" class="fa-solid fa-triangle-exclamation iuiu"></i>
                <div class="">
                    <p style="color: #9F0712; font-weight: bolder;">Extended Preparation Time</p>
                    <p style="color: #ED414A;">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                    </p>
                </div>
            </div>



            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">

                                2 potatoes, cubed</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">

                                1 cauliflower, florets</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">


                                2 carrots, sliced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">


                                1 can chickpeas</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">


                                400ml coconut milk
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">




                                3 tablespoons curry powder</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">



                                1 onion, diced</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">

                                3 cloves garlic, minced
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">9</p>
                            <p class="P-TEXT ">

                                Fresh spinach
                            </p>
                        </div>



                    </div>
                </div>


                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">
                            Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1
                            minute.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">




                            Add potatoes and carrots, cook for 5 minutes..</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">


                            Pour in coconut milk and 1 cup water. Bring to simmer.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">
                            Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">
                            Stir in fresh spinach and cook until wilted.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                            Serve hot over basmati rice or with naan bread.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">380kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">14g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">48g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">16g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">12g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">480mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Add vegetables in order of cooking time needed</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Adjust curry powder amount to taste</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Use full-fat coconut milk for creamier curry</p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Add protein like tofu or paneer if desired</p>
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function poteto () {
    document.getElementById("prodacat").innerHTML=`
        <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/potito.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.7</p>
                <p class="span">(312 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">25 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">4 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Intermediate</p>
                <p class="pr fw-normal">Asian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">
                    Thai Green Curry
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Vibrant and aromatic curry with vegetables and coconut milk</p>
            <!--  -->




            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">
                                2 tablespoons green curry paste</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">

                                400ml coconut milk</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">


                                300g chicken breast, sliced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">



                                1 red bell pepper, sliced</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">

                                100g green beans
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">


                                1 eggplant, cubed</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">
                                2 tablespoons fish sauce</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">



                                1 tablespoon palm sugar
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">
                                Fresh Thai basil leaves
                            </p>
                        </div>




                    </div>
                </div>


                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">
                            Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until
                            fragrant. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">


                            Add half the coconut milk and stir to combine with the curry paste.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">


                            Add sliced chicken and cook until no longer pink, about 5 minutes.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">

                            Add remaining coconut milk, vegetables, fish sauce, and palm sugar.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">


                            Simmer for 15-20 minutes until vegetables are tender and sauce has thickened..</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                            Stir in fresh Thai basil leaves. Serve hot with jasmine rice.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">420kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">26g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">22g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">26g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">5g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">890mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Adjust spice level by using more or less curry paste</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Add vegetables in stages based on cooking time needed</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Fresh Thai basil is essential for authentic flavor</p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Use full-fat coconut milk for richest, creamiest sauce</p>
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function sndwith () {
    document.getElementById("prodacat").innerHTML=`
      <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/sandwitch.jfif); height:726px; "
            class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.5</p>
                <p class="span">(189 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">10 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">5 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">2 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy
                <p class="pr fw-normal">Italian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">
                    Caprese Sandwich
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Fresh Italian sandwich with mozzarella, tomato, and basil</p>
            <!--  -->




            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">

                                1 ciabatta bread</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">


                                200g fresh mozzarella, sliced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">


                                2 large tomatoes, sliced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">


                                Fresh basil leaves</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">



                                3 tablespoons pesto
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">

                                2 tablespoons balsamic glaze</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">


                                Olive oil</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">


                                Salt and pepper
                            </p>
                        </div>




                    </div>
                </div>


                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">

                            Slice ciabatta bread in half horizontally.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">

                            Toast bread lightly until just crispy.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">

                            Spread pesto on both sides of bread.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">
                            Layer mozzarella slices, tomato slices, and fresh basil leaves.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">

                            Drizzle with olive oil and balsamic glaze. Season with salt and pepper.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                            Close sandwich, cut in half, and serve immediately.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">480kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">22g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">48g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">22g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">3g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">680mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Use ripe, in-season tomatoes for best flavor</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Buffalo mozzarella is traditional but harder to slice</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Toast bread lightly - not too crispy/p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Add prosciutto or salami for a heartier sandwich</p>
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function egypt () {
    document.getElementById("prodacat").innerHTML=`
    <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/egypt.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.4</p>
                <p class="span">(198 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">0 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">2 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy</p>
                <p class="pr fw-normal">Mediterranean</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">
                    Caesar Salad
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Classic salad with crispy romaine and creamy dressing</p>
            <!--  -->




            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">
                                1 large romaine lettuce</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">
                                1/2 cup Caesar dressing</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">
                                1/2 cup parmesan cheese, shaved</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">
                                1 cup croutons</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">
                                2 anchovy fillets (optional)
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">
                                Lemon wedges/p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">
                                Black pepper</p>
                        </div>






                    </div>
                </div>


                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">
                            Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces. </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">

                            Place lettuce in a large salad bowl..</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">
                            Add Caesar dressing and toss until evenly coated.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">
                            Add croutons and half the parmesan cheese. Toss gently.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">
                            Top with remaining parmesan shavings and anchovies if using.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                            Serve immediately with lemon wedges and fresh black pepper.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">320kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">12g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">18g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">22g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">3g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">680mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Use cold, crisp lettuce for best texture</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Make homemade croutons for better flavor</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Add grilled chicken for a complete meal</p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Don't dress salad until ready to serve</p>
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}
function chBwo () {
    document.getElementById("prodacat").innerHTML=`
      <div id="prodacat" class="row  sch-2">

        <div style="background-image: url(imge/chBwo.jfif); height:726px; " class="col-lg-5 col-md-12 content-left   ">

            <div class="top  gap-2 pt-2 d-flex bg-light">

                <i style="color: #FDC700; font-size: 17px; margin-top: -11px;" class="fa-solid fa-star"></i>
                <p>4.7</p>
                <p class="span">(376 reviews)</p>
            </div>

            <div style="margin-top: 500px;" class=" d-flex justify-content-around rounded-4 align-items-end bg-body">

                <div class="">
                    <i style="color: #FF6900; font-size: 25px; margin: top 20px;;" class="fa-solid fa-clock ms-2"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Prep Time</span>
                    <p class="fw-bolder">15 min</p>
                </div>
                <div class="">
                    <i style="color: #FB2C36; font-size: 25px; margin-top: 20px;"
                        class="fa-solid ms-3 fa-fire-burner"></i> <br>
                    <span style="color: #717988; font-size: small;">Cook Time</span>
                    <p class="fw-bolder">20 min</p>
                </div>
                <div class="">
                    <i style="color: #2B7FFF; font-size: 25px; margin-top: 20px;" class="fa-solid ms-2 fa-users"></i>
                    <br>
                    <span style="color: #717988; font-size: small;">Servings</span>
                    <p class="fw-bolder">2 people</p>
                </div>


            </div>


        </div>


        <div style="height:726px ; overflow: auto;" class="col-lg-7 col-md-12 bg-light content-right">


            <div class=" d-flex gap-2 ">
                <p class="pro  fw-normal">Easy
                <p class="pr fw-normal">Asian</p>
            </div>

            <div class="d-flex justify-content-between">
                <h2 class="text-black fw-bold fs-1">
                    Teriyaki Chicken Bowl
                </h2>
                <div class="d-flex gap-2 ">
                    <i class="fa-solid fa-bookmark pt-3 ps-4 pe-4 pb-3 rero"></i>
                    <i class="fa-solid  fa-share-nodes rero pt-3 ps-4 pe-4 pb-3 "></i>
                </div>
            </div>


            <p class="PR">Sweet and savory chicken over rice with vegetables</p>
            <!--  -->




            <!--Navs & tab -->

            <ul class="nav nav-pills  pits  mb-3" id="pills-tab" role="tablist">
                <li class="nav-item d-flex" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Ingredients</span>

                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-solid fa-book-open"></i>
                        Instructions</button>
                </li>
                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-solid fa-chart-pie"></i>
                        Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">

                    <button class="nav-link" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips"
                        type="button" role="tab" aria-controls="pills-tips" aria-selected="false"> <i
                            class="fa-solid fa-lightbulb"></i> Chef's Tips

                </li>


            </ul>


            <div class="tab-content gggj" id="pills-tabContent">


                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="">

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">1</p>
                            <p class="P-TEXT ">


                                400g chicken thighs, sliced</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">2</p>
                            <p class="P-TEXT ">



                                1/2 cup teriyaki sauce</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">3</p>
                            <p class="P-TEXT ">


                                2 cups cooked rice</p>
                        </div>


                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">4</p>
                            <p class="P-TEXT ">


                                1 broccoli head, florets</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">5</p>
                            <p class="P-TEXT ">


                                1 carrot, julienned
                            </p>
                        </div>
                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">6</p>
                            <p class="P-TEXT ">

                                Sesame seeds</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">7</p>
                            <p class="P-TEXT ">


                                Green onions, sliced</p>
                        </div>

                        <div class="d-flex gap-2">
                            <p class="P-NUMPER text-light">8</p>
                            <p class="P-TEXT ">


                                1 tablespoon sesame oil
                            </p>
                        </div>




                    </div>
                </div>


                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">1</p>
                        <p class="P-TEXT-2  ">
                            Heat sesame oil in a pan. Cook chicken until browned on all sides.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">2</p>
                        <p class="P-TEXT-2 ">

                            Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens..</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">3</p>
                        <p class="P-TEXT-2 ">


                            Meanwhile, steam broccoli and carrots until tender-crisp.
                        </p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">4</p>
                        <p class="P-TEXT-2 ">
                            Divide rice between bowls.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">5</p>
                        <p class="P-TEXT-2 ">

                            Top with teriyaki chicken and steamed vegetables.</p>
                    </div>

                    <div class="d-flex gap-3">
                        <p class="P-NUMPER-2 text-light  ">6</p>
                        <p class="P-TEXT-2 ">
                            Garnish with sesame seeds and green onions. Serve hot.
                        </p>
                    </div>

                </div>


                <div class="tab-pane fade ytyt" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">


                    <div class="row  text-center justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i class="fa-solid fa-fire iec"></i>
                                <p class="er align-items-center">Calories</p>
                            </div>


                            <p class="erp fw-bold ">540kcal</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color: #DBEAFE; color: #155DFC;"
                                    class="fa-solid fa-dumbbell iec"></i>
                                <p class="er">Protein</p>
                            </div>


                            <p style="margin-left: 190px;" class="erpp">42g</p>
                        </div>




                    </div>

                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FEF9C2 ; color: #D08700;"
                                    class="fa-solid fa-wheat-awn iec"></i>
                                <p class="er">Carbohydrates</p>
                            </div>


                            <p style="margin-left: 140px;" class="erpp">58g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FFE2E2 ; color:#E7000B ;"
                                    class=" fa-solid fa-droplet iec"></i>
                                <p class="er">Fat</p>
                            </div>


                            <p style="margin-left: 215px;" class="erpp">14g</p>
                        </div>




                    </div>


                    <div class="row  justify-content-center gap-5">


                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#DBFCE7 ; color:#00A63E ;"
                                    class=" fa-solid fa-seedling iec"></i>
                                <p class="er">Fiber</p>
                            </div>


                            <p style="margin-left: 220px;" class="erpp">4g</p>
                        </div>

                        <div class="col-lg-5 col-md-12  p-2 rounded-3  d-flex beg">

                            <div class=" gap-2 d-flex">
                                <i style="background-color:#FCE7F3 ; color:#E60076 ;" class=" fa-solid fa-cube iec"></i>
                                <p class="er">Sodium</p>
                            </div>


                            <p style="margin-left: 155px;" class="erpp ">1240mg</p>
                        </div>




                    </div>


                </div>


                <div class="tab-pane fade ytyt" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                    tabindex="0">

                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Use chicken thighs for juicier meatr</p>

                    </div>



                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Make homemade teriyaki sauce for better flavor control</p>

                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Add edamame for extra protein</p>
                    </div>
                    <div class=" d-flex  ttppis gap-2">
                        <i class="fa-solid fa-circle-check"></i>

                        <p>Meal prep by cooking rice and chicken ahead</p>
                    </div>





                </div>


            </div>

            <!--  -->
            <button onclick=" kolo()" class="botom-end">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe</button>

        </div>




    </div>
    `
}



var arry = [shorpa,fish,stek,pitza,smobsa,shrimp,lemon, parmigan, pasmaty,metPoll,tifo,lazanya,prger, helthe, aspagete,poteto, sndwith,egypt,chBwo];


    function kolo (){
        
    var amr =  Math.floor(Math.random()*arry.length);
    var  chosen= arry[amr];
    chosen()
    }




















