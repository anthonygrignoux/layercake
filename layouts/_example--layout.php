<?php
// Layout: 2 columns
// pretty self-explanatory
// calls the page, loops into the page's components according to their zones, does not make the coffee

if ($page && file_exists('pages/'.$page.'.php')) {
    include 'pages/'.$page.'.php';
    ?>

    <div id="main">
        <div class="l-row">
            <div class="l-col">
                <?php
                // Components
                if (!empty($components[1])) {
                    foreach ($components[1] as $module) {
                        if (file_exists('components/'.$module.'.php')) {
                            include 'components/'.$module.'.php';
                        }
                    }
                }
                ?>
            </div>
            <div class="l-col">
                <?php
                // Components
                if (!empty($components[2])) {
                    foreach ($components[2] as $module) {
                        if (file_exists('components/'.$module.'.php')) {
                            include 'components/'.$module.'.php';
                        }
                    }
                }
                ?>
            </div>
        </div>
    </div>

<?php
} else {
    echo "No such page";
}