import React from 'react'

function Sidebar() {
  return (
    <div>
            <div class="sticky left-0 top-0 z-[1000] flex h-screen flex-col justify-between bg-white text-black duration-300 hidden w-0 sm:flex sm:w-16">
        <button
          type="button"
          class="border-dark-purple absolute -right-4 top-7 hidden cursor-pointer rounded-full border-2 bg-white p-[3px] sm:block rotate-180"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left "
          >
            <g>
              <polyline points="15 18 9 12 15 6"></polyline>
            </g>
          </svg>
        </button>
        <div class="flex h-full flex-col">
          <h1 class="p-6 text-xl font-medium text-white w-16 pb-9">
            <a aria-label="starryai" class="h-[32px]" href="/app/home">
              <svg
                width="21"
                height="27"
                viewBox="0 0 21 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-[26.53px] w-[20.34px] flex-shrink-0 flex-grow-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M6.40585 26.5315C4.4092 26.5315 2.8247 26.0735 1.65236 25.1576C0.49833 24.2234 -0.0512068 22.9595 0.00374684 21.3658H3.60321C3.56658 22.0619 3.79555 22.6114 4.29013 23.0144C4.80303 23.3991 5.50827 23.5915 6.40585 23.5915C7.13857 23.5915 7.7339 23.4632 8.19185 23.2068C8.64979 22.9503 8.87877 22.6206 8.87877 22.2176C8.87877 21.7963 8.63147 21.4849 8.13689 21.2834C7.64231 21.0819 6.8638 20.8896 5.80136 20.7064C4.6107 20.4683 3.64901 20.2301 2.91629 19.992C2.18358 19.7539 1.54245 19.36 0.992913 18.8105C0.443376 18.2426 0.168608 17.4733 0.168608 16.5024C0.168608 15.1103 0.736462 14.0112 1.87217 13.2052C3.00788 12.3809 4.46415 11.9688 6.24099 11.9688C7.39502 11.9688 8.42998 12.1519 9.34587 12.5183C10.2801 12.8663 11.0128 13.3701 11.544 14.0295C12.0752 14.689 12.3408 15.4675 12.3408 16.365C12.3408 16.6215 12.3134 16.8871 12.2584 17.1619H8.63147C8.66811 16.9421 8.68643 16.7864 8.68643 16.6948C8.68643 16.1452 8.45745 15.7148 7.99951 15.4034C7.55988 15.0736 6.97371 14.9088 6.24099 14.9088C5.56323 14.9088 5.02285 15.0462 4.61986 15.3209C4.21686 15.5774 4.01537 15.9071 4.01537 16.3101C4.01537 16.7497 4.26266 17.0703 4.75724 17.2718C5.25182 17.455 6.04865 17.6473 7.14773 17.8488C8.32007 18.0686 9.2726 18.2976 10.0053 18.5357C10.738 18.7738 11.37 19.1677 11.9012 19.7172C12.4508 20.2668 12.7255 21.0269 12.7255 21.9978C12.7255 23.4083 12.1394 24.5165 10.967 25.3225C9.81298 26.1285 8.29259 26.5315 6.40585 26.5315Z"
                  fill="#403E3D"
                ></path>
                <g clip-path="url(#clip0_7890_46094)">
                  <path
                    d="M20.3405 5.18436C19.7941 5.24816 19.2478 5.31197 18.7017 5.37645C18.1312 5.44361 17.5667 5.53798 17.0152 5.70723C16.5491 5.85029 16.2157 6.14849 15.9712 6.55718C15.6787 7.04546 15.5474 7.58814 15.4675 8.14258C15.3647 8.85451 15.2794 9.5688 15.1864 10.2821C15.1837 10.3039 15.1783 10.3254 15.1619 10.3459C15.1216 9.93148 15.0816 9.51708 15.041 9.10268C14.9792 8.47235 14.8872 7.8474 14.7152 7.23587C14.4932 6.44536 13.9774 5.95338 13.2037 5.70521C12.6728 5.53495 12.1261 5.45033 11.577 5.37745C11.0743 5.31096 10.5702 5.25387 10.0668 5.19275C10.0443 5.19007 10.0218 5.1857 10 5.17126C10.4215 5.12928 10.8432 5.091 11.264 5.04466C11.9202 4.97212 12.5787 4.90395 13.2074 4.68634C13.652 4.53254 14.0567 4.30955 14.3475 3.92403C14.5231 3.69098 14.6104 3.41594 14.6884 3.1399C14.8825 2.45248 14.9557 1.7439 15.0403 1.03768C15.0819 0.691785 15.1209 0.345893 15.18 0C15.228 0.413392 15.2744 0.826784 15.3241 1.23984C15.4127 1.97327 15.4832 2.71005 15.7311 3.41359C15.899 3.89012 16.1525 4.29478 16.6485 4.48989C16.8567 4.57149 17.0639 4.66989 17.2812 4.71153C17.8941 4.82873 18.511 4.92746 19.1282 5.02014C19.5319 5.08093 19.9389 5.11854 20.3445 5.16656C20.3432 5.17261 20.3422 5.17899 20.3408 5.18503L20.3405 5.18436Z"
                    fill="#403E3D"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_7890_46094">
                    <rect
                      width="10.3445"
                      height="10.3462"
                      fill="white"
                      transform="translate(10)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </h1>
          <div class="flex-grow overflow-visible">
            <div class="space-y-6">
              <div class="px-3">
                <div>
                  <div>
                    <div class="pb-6">
                      <svg
                        width="40"
                        height="2"
                        viewBox="0 0 40 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mx-auto flex-grow"
                        preserveAspectRatio="none"
                      >
                        <path d="M0 0.53125H40" stroke="#E8E8E8"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="relative">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all bg-[#550FD0]/5 hover:bg-[#550FD0]/10 px-2"
                    >
                      <div class="flex gap-3">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative flex-grow-0 flex-shrink-0 w-6 h-6"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M14.5 20C18.0899 20 21 17.0899 21 13.5C21 9.91015 18.0899 7 14.5 7C10.9101 7 8 9.91015 8 13.5C8 17.0899 10.9101 20 14.5 20Z"
                              fill="rgba(85, 15, 208, 0.2)"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.842 8.29925L13.842 3.63225C12.759 2.78925 11.242 2.78925 10.158 3.63225L4.158 8.29925C3.427 8.86725 3 9.74125 3 10.6673V18.0002C3 19.6572 4.343 21.0002 6 21.0002H18C19.657 21.0002 21 19.6572 21 18.0002V10.6673C21 9.74125 20.573 8.86725 19.842 8.29925Z"
                              stroke="#550FD0"
                              stroke-width="1.5"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.842 8.29925L13.842 3.63225C12.759 2.78925 11.242 2.78925 10.158 3.63225L4.158 8.29925C3.427 8.86725 3 9.74125 3 10.6673V18.0002C3 19.6572 4.343 21.0002 6 21.0002H18C19.657 21.0002 21 19.6572 21 18.0002V10.6673C21 9.74125 20.573 8.86725 19.842 8.29925Z"
                              stroke="rgba(85, 15, 208, 0.2)"
                              stroke-opacity="0.2"
                              stroke-width="1.5"
                            ></path>
                            <path
                              d="M14.12 11.379C15.292 12.551 15.292 14.45 14.12 15.622C12.948 16.794 11.049 16.794 9.87705 15.622C8.70505 14.45 8.70505 12.551 9.87705 11.379C11.049 10.207 12.949 10.207 14.12 11.379"
                              stroke="#550FD0"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M14.12 11.379C15.292 12.551 15.292 14.45 14.12 15.622C12.948 16.794 11.049 16.794 9.87705 15.622C8.70505 14.45 8.70505 12.551 9.87705 11.379C11.049 10.207 12.949 10.207 14.12 11.379"
                              stroke="rgba(85, 15, 208, 0.2)"
                              stroke-opacity="0.2"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all hover:bg-gray-50 px-2"
                    >
                      <div class="flex gap-3">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative flex-grow-0 flex-shrink-0 w-6 h-6"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M8 2C8 1.44772 8.44772 1 9 1H19C19.5523 1 20 1.44772 20 2V7C20 10.3137 17.3137 13 14 13C10.6863 13 8 10.3137 8 7V2Z"
                              fill="#EAE6E0"
                              fill-opacity="0.2"
                            ></path>
                            <path
                              d="M6 4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V9C18 12.3137 15.3137 15 12 15V15C8.68629 15 6 12.3137 6 9V4Z"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M7.5 20.6667C7.5 20.8508 7.64924 21 7.83333 21H16.1667C16.3508 21 16.5 20.8508 16.5 20.6667V20.6667C16.5 19.1939 15.3061 18 13.8333 18H10.1667C8.69391 18 7.5 19.1939 7.5 20.6667V20.6667Z"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M6 5H4C3.44772 5 3 5.44772 3 6V8C3 9.65685 4.34315 11 6 11V11"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M18 5H20C20.5523 5 21 5.44772 21 6V8C21 9.65685 19.6569 11 18 11V11"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 15.75V17.25"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all hover:bg-gray-50 px-2"
                    >
                      <div class="flex gap-3">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative flex-grow-0 flex-shrink-0 w-6 h-6"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M6.5 15L6 18H5.5V3C5.5 2.44772 5.94772 2 6.5 2H10.0401C10.332 2 10.6093 2.12756 10.7993 2.34921L11.6446 3.33537C12.8222 4.70928 14.5414 5.5 16.351 5.5H16.5C18.9853 5.5 21 7.51472 21 10H10L8 11L6.5 15Z"
                              fill="#EAE6E0"
                            ></path>
                            <path
                              d="M19 10V9C19 7.895 18.105 7 17 7H12.535C12.201 7 11.888 6.833 11.703 6.555L10.297 4.446C10.111 4.167 9.799 4 9.465 4H5C3.895 4 3 4.895 3 6V18.853C3 19.487 3.513 20 4.147 20M4.147 20C4.653 20 5.1 19.668 5.245 19.183L7.572 11.426C7.826 10.579 8.605 10 9.488 10H19.329C20.664 10 21.624 11.282 21.248 12.563L19.487 18.563C19.237 19.415 18.456 20 17.568 20H4.147Z"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all hover:bg-gray-50 px-2"
                    >
                      <div class="flex gap-3">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative flex-grow-0 flex-shrink-0 w-6 h-6"
                            preserveAspectRatio="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.14094 20.9257C4.82074 19.7439 4.70859 17.7156 5.89044 16.3954L13.533 7.85814C14.2084 7.10375 15.3674 7.03966 16.1218 7.715L18.1707 9.54923C18.9251 10.2246 18.9892 11.3836 18.3139 12.138L10.6713 20.6752C9.48943 21.9954 7.46113 22.1076 6.14094 20.9257Z"
                              fill="#EAE6E0"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.95833 20.2422V20.2422C5.18642 20.2422 3.75 18.8058 3.75 17.0339V5.57552C3.75 4.563 4.57081 3.74219 5.58333 3.74219H8.33333C9.34586 3.74219 10.1667 4.563 10.1667 5.57552V17.0339C10.1667 18.8058 8.73025 20.2422 6.95833 20.2422Z"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M9.22656 19.3032L18.1283 10.4015C18.844 9.68557 18.844 8.52507 18.1283 7.80915L16.1841 5.8649C15.4681 5.1492 14.3076 5.1492 13.5917 5.8649L10.1661 9.28865"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M14.7029 13.8281H18.4154C19.4279 13.8281 20.2487 14.6489 20.2487 15.6615V18.4115C20.2487 19.424 19.4279 20.2448 18.4154 20.2448H6.95703"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.75 14.7005H10.1667"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.75 9.16146H10.1667"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                    <div class="relative w-max" data-headlessui-state=""></div>
                    <div class="flex w-full flex-col justify-between transition-all">
                      <button type="button" class="w-full">
                        {" "}
                      </button>
                      <div class="transition-height overflow-hidden duration-200 ease-in-out">
                        //{" "}
                        <div class="pt-0">
                          <button
                            type="button"
                            class="flex w-full items-center gap-3 rounded-lg p-3 pl-12 transition-all hover:bg-gray-50"
                          >
                            <p class="text-base font-bold text-[#403e3d]">
                              Public
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="flex w-full flex-col justify-between transition-all">
                      <button type="button" class="w-full">
                        {" "}
                      </button>
                      <div class="transition-height overflow-hidden duration-200 ease-in-out">
                        <div class="pt-0">
                          <button
                            type="button"
                            class="flex w-full items-center gap-3 rounded-lg p-3 pl-12 transition-all hover:bg-gray-50"
                          >
                            <p class="text-base font-bold text-[#403e3d]">
                              My Styles
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all hover:bg-gray-50 px-2"
                    >
                      <div class="flex gap-3">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative flex-grow-0 flex-shrink-0 w-6 h-6"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M12 22.1484C16.4183 22.1484 20 18.5667 20 14.1484C20 9.73016 16.4183 6.14844 12 6.14844C7.58172 6.14844 4 9.73016 4 14.1484C4 18.5667 7.58172 22.1484 12 22.1484Z"
                              fill="#EAE6E0"
                            ></path>
                            <path
                              d="M16.2443 5.96017C19.0454 8.76124 19.0454 13.3027 16.2443 16.1037C13.4433 18.9048 8.90186 18.9048 6.1008 16.1037C3.29973 13.3027 3.29973 8.76124 6.1008 5.96017C8.90186 3.15911 13.4433 3.15911 16.2443 5.96017"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M20.0002 19.8616L16.2402 16.1016"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div>
                  <div>
                    <div class="pb-6">
                      <svg
                        width="40"
                        height="2"
                        viewBox="0 0 40 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mx-auto flex-grow"
                        preserveAspectRatio="none"
                      >
                        <path d="M0 0.53125H40" stroke="#E8E8E8"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="relative">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all hover:bg-gray-50 px-2"
                    >
                      <div class="flex gap-3">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative flex-grow-0 flex-shrink-0 w-5 h-5"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M3.00781 14.9448H9.99998"
                              stroke="#403E3D"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.00781 8.90569H9.99998"
                              stroke="#403E3D"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M6.5 21C4.567 21 3 19.433 3 17.5L3 4C3 3.44772 3.44772 3 4 3L9 3C9.55228 3 10 3.44772 10 4L10 17.5C10 19.433 8.433 21 6.5 21V21Z"
                              stroke="#403E3D"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M9.52141 7.79289C9.13088 8.18342 9.13088 8.81658 9.52141 9.20711C9.91193 9.59763 10.5451 9.59763 10.9356 9.20711L9.52141 7.79289ZM15.4356 4.70711C15.8261 4.31658 15.8261 3.68342 15.4356 3.29289C15.0451 2.90237 14.4119 2.90237 14.0214 3.29289L15.4356 4.70711ZM14.628 14V13C14.3628 13 14.1084 13.1054 13.9209 13.2929L14.628 14ZM9.79094 17.4229L9.08383 18.13L10.498 19.5442L11.2052 18.8371L9.79094 17.4229ZM21 15L20 15V15H21ZM21 20L22 20V20H21ZM20 21L20 22L20 22L20 21ZM6.5 20C5.94772 20 5.5 20.4477 5.5 21C5.5 21.5523 5.94772 22 6.5 22V20ZM20 14L20 15L20 15L20 14ZM10.9356 9.20711L15.4356 4.70711L14.0214 3.29289L9.52141 7.79289L10.9356 9.20711ZM13.9209 13.2929L9.79094 17.4229L11.2052 18.8371L15.3351 14.7071L13.9209 13.2929ZM20 15V20H22V15H20ZM20 20H6.5V22H20V20ZM20 20L20 20L20 22C21.1046 22 22 21.1046 22 20L20 20ZM22 15C22 13.8954 21.1046 13 20 13L20 15L20 15L22 15ZM14.628 15H20V13H14.628V15Z"
                              fill="#403E3D"
                            ></path>
                            <path
                              d="M19.5 5L19.5 10"
                              stroke="#403E3D"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M17 7.5L22 7.5"
                              stroke="#403E3D"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all hover:bg-gray-50 px-2"
                    >
                      <div class="flex gap-3">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#EAE6E0"
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative flex-grow-0 flex-shrink-0 w-6 h-6"
                            preserveAspectRatio="none"
                          >
                            <circle
                              cx="15.5"
                              cy="11.5"
                              r="6.5"
                              fill="#EAE6E0"
                              fill-opacity="0.2"
                            ></circle>
                            <path
                              d="M14.6094 5.00439V3.25"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M14.6094 15.5278V13.7734"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M8.4668 9.39062H10.2212"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M18.9941 9.39062H20.7485"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M17.0645 11.8438L18.1171 12.8964"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M17.0645 6.93544L18.1171 5.88281"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M4.08203 19.9182L11.9768 12.0234"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12.1522 6.93544L11.0996 5.88281"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all hover:bg-gray-50 px-2"
                    >
                      <div class="flex gap-3">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative flex-grow-0 flex-shrink-0 w-6 h-6"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M22.5 20C22.5 21.1046 21.6046 22 20.5 22H8.91421C8.02331 22 7.57714 20.9229 8.20711 20.2929L20.7929 7.7071C21.4229 7.07714 22.5 7.52331 22.5 8.41421V20Z"
                              fill="#EAE6E0"
                            ></path>
                            <rect
                              x="5"
                              y="5"
                              width="14"
                              height="14"
                              rx="1.75"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></rect>
                            <rect
                              x="5"
                              y="5"
                              width="14"
                              height="14"
                              rx="1.75"
                              stroke="black"
                              stroke-opacity="0.2"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></rect>
                            <path
                              d="M18.125 5.875L5.875 18.125"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M18.125 5.875L5.875 18.125"
                              stroke="black"
                              stroke-opacity="0.2"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M16.375 16.375H19C19 17.8247 17.8247 19 16.375 19V16.375Z"
                              fill="#EAE6E0"
                            ></path>
                            <path
                              d="M16.375 16.375H19C19 17.8247 17.8247 19 16.375 19V16.375Z"
                              fill="black"
                              fill-opacity="0.2"
                            ></path>
                            <rect
                              x="13.75"
                              y="13.75"
                              width="2.625"
                              height="2.625"
                              fill="#EAE6E0"
                            ></rect>
                            <rect
                              x="13.75"
                              y="13.75"
                              width="2.625"
                              height="2.625"
                              fill="black"
                              fill-opacity="0.2"
                            ></rect>
                            <rect
                              x="11.125"
                              y="16.375"
                              width="2.625"
                              height="2.625"
                              fill="#EAE6E0"
                            ></rect>
                            <rect
                              x="11.125"
                              y="16.375"
                              width="2.625"
                              height="2.625"
                              fill="black"
                              fill-opacity="0.2"
                            ></rect>
                            <rect
                              x="16.375"
                              y="11.125"
                              width="2.625"
                              height="2.625"
                              fill="#EAE6E0"
                            ></rect>
                            <rect
                              x="16.375"
                              y="11.125"
                              width="2.625"
                              height="2.625"
                              fill="black"
                              fill-opacity="0.2"
                            ></rect>
                            <path
                              d="M16.375 8.5V11.125H13.75L16.375 8.5Z"
                              fill="#EAE6E0"
                            ></path>
                            <path
                              d="M16.375 8.5V11.125H13.75L16.375 8.5Z"
                              fill="black"
                              fill-opacity="0.2"
                            ></path>
                            <path
                              d="M19 5.875V8.5H16.375L19 5.875Z"
                              fill="#EAE6E0"
                            ></path>
                            <path
                              d="M19 5.875V8.5H16.375L19 5.875Z"
                              fill="black"
                              fill-opacity="0.2"
                            ></path>
                            <path
                              d="M13.75 11.125V13.75H11.125L13.75 11.125Z"
                              fill="#EAE6E0"
                            ></path>
                            <path
                              d="M13.75 11.125V13.75H11.125L13.75 11.125Z"
                              fill="black"
                              fill-opacity="0.2"
                            ></path>
                            <path
                              d="M11.125 13.75V16.375H8.5L11.125 13.75Z"
                              fill="#EAE6E0"
                            ></path>
                            <path
                              d="M11.125 13.75V16.375H8.5L11.125 13.75Z"
                              fill="black"
                              fill-opacity="0.2"
                            ></path>
                            <path
                              d="M8.5 16.375V19H5.875L8.5 16.375Z"
                              fill="#EAE6E0"
                            ></path>
                            <path
                              d="M8.5 16.375V19H5.875L8.5 16.375Z"
                              fill="black"
                              fill-opacity="0.2"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all hover:bg-gray-50 px-2"
                    >
                      <div class="flex gap-3">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative flex-grow-0 flex-shrink-0 w-6 h-6"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75Z"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75Z"
                              stroke="black"
                              stroke-opacity="0.2"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M17.25 12.75C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25C16.8358 11.25 16.5 11.5858 16.5 12C16.5 12.4142 16.8358 12.75 17.25 12.75Z"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M17.25 12.75C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25C16.8358 11.25 16.5 11.5858 16.5 12C16.5 12.4142 16.8358 12.75 17.25 12.75Z"
                              stroke="black"
                              stroke-opacity="0.2"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M6.75 12.75C7.16421 12.75 7.5 12.4142 7.5 12C7.5 11.5858 7.16421 11.25 6.75 11.25C6.33579 11.25 6 11.5858 6 12C6 12.4142 6.33579 12.75 6.75 12.75Z"
                              stroke="#403E3D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M6.75 12.75C7.16421 12.75 7.5 12.4142 7.5 12C7.5 11.5858 7.16421 11.25 6.75 11.25C6.33579 11.25 6 11.5858 6 12C6 12.4142 6.33579 12.75 6.75 12.75Z"
                              stroke="black"
                              stroke-opacity="0.2"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
  
    </div>
  )
}

export default Sidebar
