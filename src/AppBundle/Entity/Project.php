<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Project
 *
 * @ORM\Table(name="projects")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProjectRepository")
 */
class Project
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(
     *  name="name",
     *  type="string",
     *  length=255
     * )
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(
     *  name="description",
     *  type="string",
     *  length=255
     * )
     */
    private $description;

    /**
     * @var \DateTime
     *
     * @ORM\Column(
     *  name="startDate",
     *  type="datetime"
     * )
     */
    private $startDate;

    /**
     * @var string
     *
     * @ORM\Column(
     *  name="link",
     *  unique=false,
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     */
    private $link;

    /**
     * @var string
     *
     * @ORM\Column(
     *  name="relatedLink",
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     */
    private $relatedLink;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Project
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Project
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set startDate
     *
     * @param \DateTime $startDate
     *
     * @return Project
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * Get startDate
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * Set link
     *
     * @param string $link
     *
     * @return Project
     */
    public function setLink($link)
    {
        $this->link = $link;

        return $this;
    }

    /**
     * Get link
     *
     * @return string
     */
    public function getLink()
    {
        return $this->link;
    }

    /**
     * Set relatedLink
     *
     * @param string $relatedLink
     *
     * @return Project
     */
    public function setRelatedLink($relatedLink)
    {
        $this->relatedLink = $relatedLink;

        return $this;
    }

    /**
     * Get relatedLink
     *
     * @return string
     */
    public function getRelatedLink()
    {
        return $this->relatedLink;
    }

    public function getProject()
    {
        return $this;
    }
}

