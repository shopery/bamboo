<?php

/*
 * This file is part of the Elcodi package.
 *
 * Copyright (c) 2015 Elcodi.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * Feel free to edit as you please, and have fun.
 *
 * @author Toni Pinel <yuhu@mmoreram.com>
 * @author Elcodi Team <tech@elcodi.com>
 */

namespace Elcodi\Template\BlueDayTemplateBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

use Elcodi\Component\Template\Interfaces\TemplateInterface;

/**
 * Class BlueDayTemplateBundle
 */
class BlueDayTemplateBundle extends Bundle implements TemplateInterface
{
    /**
     * Get the template bundle
     *
     * @return string Template name
     */
    public function getTemplateName()
    {
        return 'BlueDayTemplateBundle';
    }
}
