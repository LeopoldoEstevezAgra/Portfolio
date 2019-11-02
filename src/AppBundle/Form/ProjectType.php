<?php

namespace AppBundle\Form;

use AppBundle\Entity\Project;
use Symfony\Component\Form\AbstractType;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;


class ProjectType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add("Name",TextType::class , [
                "label" => "Title",
            ])
            ->add("Description",TextareaType::class, [
                "label" => "Description",
                "attr"=>[
                    "rows"=>"10"
                ]
            ])
            ->add("Submit",SubmitType::class,[
                "label" => " Add",
                "attr" => [
                    "class"=> "fas fa-plus submit-button"
                ]
            ]);
    }
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Project',
            'user' => null,
        ));
    }

}