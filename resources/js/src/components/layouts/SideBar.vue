<template>
    <nav id="sidebar">
        <!-- Sidebar Content -->
        <div class="sidebar-content">
            <!-- Side Header -->
            <div class="content-header justify-content-lg-center">
                <!-- Logo -->
                <div>
                    <span class="smini-visible fw-bold tracking-wide fs-lg">
                        c<span class="text-primary">b</span>
                    </span>
                    <a class="link-fx fw-bold tracking-wide mx-auto" href="/">
                        <span class="smini-hidden">
                            <i class="fa fa-fire text-primary"></i>
                            <span class="fs-4 text-dual">code</span
                            ><span class="fs-4 text-primary">base</span>
                        </span>
                    </a>
                </div>
                <!-- END Logo -->

                <!-- Options -->
                <div>
                    <!-- Close Sidebar, Visible only on mobile screens -->
                    <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                    <button
                        type="button"
                        class="btn btn-sm btn-alt-danger d-lg-none"
                        data-toggle="layout"
                        data-action="sidebar_close"
                    >
                        <i class="fa fa-fw fa-times"></i>
                    </button>
                    <!-- END Close Sidebar -->
                </div>
                <!-- END Options -->
            </div>
            <!-- END Side Header -->

            <!-- Sidebar Scrolling -->
            <div class="js-sidebar-scroll">
                <!-- Side User -->
                <div class="content-side content-side-user px-0 py-0">
                    <!-- Visible only in mini mode -->
                    <div class="smini-visible-block animated fadeIn px-3">
                        <img
                            class="img-avatar img-avatar32"
                            src="https://placehold.co/1000x800"
                            alt=""
                        />
                    </div>
                    <!-- END Visible only in mini mode -->

                    <!-- Visible only in normal mode -->
                    <div class="smini-hidden text-center mx-auto">
                        <a class="img-link" href="javascript:void(0)">
                            <img
                                class="img-avatar"
                                src="https://placehold.co/1000x800"
                                alt=""
                            />
                        </a>
                        <ul class="list-inline mt-3 mb-0">
                            <li class="list-inline-item">
                                <a
                                    class="link-fx text-dual fs-sm fw-semibold text-uppercase"
                                    href="javascript:void(0)"
                                    >J. Smith</a
                                >
                            </li>
                            <li class="list-inline-item">
                                <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                                <a
                                    class="link-fx text-dual"
                                    data-toggle="layout"
                                    data-action="dark_mode_toggle"
                                    href="javascript:void(0)"
                                >
                                    <i class="fa fa-burn"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a
                                    class="link-fx text-dual"
                                    href="javascript:void(0)"
                                >
                                    <i class="fa fa-sign-out-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- END Visible only in normal mode -->
                </div>
                <!-- END Side User -->

                <!-- Side Navigation -->
                <div class="content-side content-side-full">
                    <ul class="nav-main">
                        <li class="nav-main-item">
                            <router-link
                                class="nav-main-link"
                                :class="{ active: route.name == 'Page1' }"
                                :to="{ name: 'Page1' }"
                            >
                                <i
                                    class="nav-main-link-icon fa fa-house-user"
                                ></i>
                                <span class="nav-main-link-name"
                                    >Dashboard</span
                                >
                            </router-link>
                        </li>
                        <li class="nav-main-heading">More</li>
                        <li class="nav-main-item">
                            <router-link
                                class="nav-main-link"
                                :class="{ active: route.name == 'Page2' }"
                                :to="{ name: 'Page2' }"
                            >
                                <i class="nav-main-link-icon fa fa-globe"></i>
                                <span class="nav-main-link-name">Landing</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- END Side Navigation -->
            </div>
            <!-- END Sidebar Scrolling -->
        </div>
    </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

console.log(route.name);
</script>
